import Layouts from "../components/Layouts";
import Link from "../util/noScrollLink";

const error = () => {
  return (
    <Layouts>
      <div className="font-semibold text-left pt-24 uppercase text-6xl">
        404
      </div>
      <div className="font-normal text-left opacity-80 pt-8 text-xl">
        Nice to meet you!
      </div>

      <Link href="/">
        <div className="font-mono hover:underline no-underline opacity-50 hover:opacity-75 cursor-pointer font-normal text-left mt-12 text-xl">
          cd ..
        </div>
      </Link>
    </Layouts>
  );
};

export default error;
