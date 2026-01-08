import { useParams } from "react-router";

const DailyView = () => {
    const { monthandday } = useParams();
    return (
        <div>
            <p className="text-2xl m-4">
                Month: {monthandday?.split("_")[0].toLocaleUpperCase()}  Day: {monthandday?.split("_").pop()}
            </p>
        </div>
    );
};

export default DailyView;