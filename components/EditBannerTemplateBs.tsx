import { RxCross2 } from "react-icons/rx";
import BannerImageComp from "./BannerImageComp";
import { useState } from "react";
import Image from "next/image";

interface BannerImageCompProps {
  bannerdata: {
    id: string;
    title: string;
    Description: string;
    BackgroundTemplate: string;
    Image: string;
    cta: string;
  };
  handleClose: () => void;
  handleUpdate: (
    bannerId: string,
    title: string,
    description: string,
    buttonText: string,
    imagesrc: string
  ) => void;
}

const EditBannerTemplateBs = ({
  bannerdata,
  handleClose,
  handleUpdate,
}: BannerImageCompProps) => {
  const [title, setTitle] = useState(bannerdata.title);
  const [description, setDescription] = useState(bannerdata.Description);
  const [buttonText, setButtonText] = useState(bannerdata.cta);
  const [imagesrc, setImagesrc] = useState(bannerdata.Image);

  const handleEditBanner = () => {
    console.log(bannerdata.id, title, description, buttonText);
    handleUpdate(bannerdata.id, title, description, buttonText, imagesrc);
    handleClose();
  };

  return (
    <div className="bg-white flex flex-col w-[600px] h-[90%] rounded-xl ">
      <div className="flex items-center justify-between p-4">
        <p className="text-lg font-semibold text-gray-600">Edit Banner</p>
        <RxCross2
          onClick={handleClose}
          className="h-10 w-10 bg-gray-100 rounded-full text-gray-600 cursor-pointer p-2"
        />
      </div>
      <div className="ml-24">
        <BannerImageComp
          key={bannerdata.id}
          // {...bannerdata}
          id={bannerdata.id}
          title={title}
          Description={description}
          BackgroundTemplate={bannerdata.BackgroundTemplate}
          Image={imagesrc}
          cta={buttonText}
          clickHandler={handleClose}
          forEdit={false}
        />
      </div>
      <div
        className="mt-80 mx-10 overflow-y-auto flex flex-col gap-4
      "
      >
        <div className="flex items-center gap-4">
          <Image
            src={"/sample1.jpg"}
            height={60}
            width={60}
            alt="smaple Images"
            className="border-4 border-gray-400 rounded-full h-16 w-16 cursor-pointer"
            onClick={() => setImagesrc("/sample1.jpg")}
          />
          <Image
            src={"/sample2.jpg"}
            height={60}
            width={60}
            alt="smaple Images"
            className="border-4 border-gray-400 rounded-full h-16 w-16 cursor-pointer"
            onClick={() => setImagesrc("/sample2.jpg")}
          />
          <Image
            src={"/sample3.jpg"}
            height={60}
            width={60}
            alt="smaple Images"
            className="border-4 border-gray-400 rounded-full h-16 w-16 cursor-pointer "
            onClick={() => setImagesrc("/sample3.jpg")}
          />
          <Image
            src={"/sample4.jpg"}
            height={60}
            width={60}
            alt="smaple Images"
            className="border-4 border-gray-400 rounded-full h-16 w-16 cursor-pointer "
            onClick={() => setImagesrc("/sample4.jpg")}
          />
          <Image
            src={"/sample5.jpg"}
            height={60}
            width={60}
            alt="smaple Images"
            className="border-4 border-gray-400 rounded-full h-16 w-16 cursor-pointer "
            onClick={() => setImagesrc("/sample5.jpg")}
          />
          <Image
            src={"/sample6.jpg"}
            height={60}
            width={60}
            alt="smaple Images"
            className="border-4 border-gray-400 rounded-full h-16 w-16 cursor-pointer "
            onClick={() => setImagesrc("/sample6.jpg")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-semibold text-gray-600">Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-semibold text-gray-600">Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-semibold text-gray-600">Button Text</p>
          <input
            type="text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            className="border border-gray-400 p-2 rounded-lg"
          />
        </div>
        <button
          onClick={handleEditBanner}
          className="bg-black text-white p-3 rounded-lg font-semibold uppercase mb-5"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
