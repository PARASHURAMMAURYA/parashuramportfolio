import { Card } from "flowbite-react";
import travel from "../assets/travelWeb.png";
import crud from '../assets/crud.png'
export function Cards() {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 min-[320px]:grid-cols-1 gap-4 ">
      <Card
        className="animate-slide-right max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={travel}
      >
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Travel Web using HTML5, SCSS and Reactjs fully Responsive in all
          Device .
        </p>
        <div>
          <button
            className="w-full rounded border border-primary bg-primary p-2 text-white transition hover:bg-opacity-90"
          >
            <a href="https://myreacttravelweb.netlify.app/#" className="text-white no-underline hover:no-underline">View</a>
            
          </button>
        </div>
      </Card>

      <Card
        className="animate-slide-left max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={crud}
      >
        <p className="font-normal text-gray-700 dark:text-gray-400">
           Reactjs Crud operation Project with local Database Api.
        </p>
        <div>
          <button
            className="w-full rounded border border-primary bg-primary p-2 mt-4 text-white transition hover:bg-opacity-90"
          >
            <a href="https://crudprojectapp.netlify.app/" className="text-white no-underline hover:no-underline">View</a>
            
          </button>
        </div>
      </Card>
    </div>
  );
}
