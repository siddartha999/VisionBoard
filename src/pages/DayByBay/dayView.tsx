import { useNavigate, useParams } from "react-router";
import { getDayName } from "../../utils/helper";

const DayView = () => {
    const {month, year, day} = useParams();
    const navigate = useNavigate();

    return (
        <div className="mt-8" id="DayView">
            <div id="DayView_header" className="">
                <p className="text-2xl ml-4 cursor-pointer text-blue-400" onClick={_ => navigate(`/dbd/${year}/${month}`)}>{`<`} {month} {year}</p>
                <p className="text-2xl text-center">{day} {month} {year}, {getDayName(year ?? '', month ?? '', Number(day))}</p>
            </div>
            <div className="w-[80%] h-[80vh] mx-auto mt-4 bg-gray-200 text-2xl text-center grid grid-cols-1 gap-4">
                <p className="text-black mt-4">Woke up: 5:00</p>
                <p className="text-black">Training:</p>
                <p className="text-black">Meditation:</p>
                <p className="text-black">Nutrition:</p>
                <p className="text-black">Slept:</p>
                <p className="text-black">Brushed Twice?</p>
                <p className="text-black"></p>
                <p className="text-black"></p>
                <p className="text-black"></p>
                <p className="text-black"></p>
                <p className="text-black"></p>
            </div>
        </div>
    );
};

export default DayView;