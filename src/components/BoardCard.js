import React from "react";
import axios from "axios";

function BoardCard() {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-wzbdi/endpoint/board"
        ); // Adjust the URL if your server is running on a different port
        let _data = response.data;
        _data = _data.sort((a, b) => a.id - b.id); // Sort the data by ID
        setData(_data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data");
      }
    };

    fetchData();
  }, []); // Runs once on component mount

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  if (data.length === 0) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="flex-row justify-center overflow-auto flex-wrap inline-flex">
      {data.map((info) => (
        <div
          className="flex sm:m-4 md:m-2 -mx-[w/2] font-custom justify-center sm:scale-100 scale-[0.90]"
          key={info.id}
        >
          {/* picture */}
          <div className="rounded-full h-[7.5rem] w-[7.5rem] bg-primary border-2 border-primary -mr-16 z-10 overflow-hidden object-center relative shadow-md shadow-background hover:border-highlight">
            <img
              src={info.img}
              alt={info.name}
              className="w-auto bg-cover max-w-full absolute top-2 left-0 h-auto scale-[1.15]"
            />
          </div>

          {/* card */}
          <div className="rounded-2xl sm:mb-4 w-60 h-80 bg-secondary border-2 border-primary ">
            <div className="ml-20 mt-10 text-xl font-bold text-textcol tracking-widest w-auto h-14 ">
              {info.name}
            </div>
            <div className="text-lg ml-5 mr-2 mt-10 font-bold text-secondary rounded-2xl p-4 bg-primary tracking-tight relative text-center ">
              {info.position}
            </div>

            <div className="flex flex-row m-5 justify-center gap-3 mb:bottom-1 bottom-3">
              {/* LinkedIn */}
              {info.linkedIn && (
                <a href={info.linkedIn} target="_blank" rel="noreferrer">
                  <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
              )}

              {/* Instagram */}
              {info.instagram && (
                <a href={info.instagram} target="_blank" rel="noreferrer">
                  <img src="/instagram.svg" alt="Instagram" />
                </a>
              )}

              {/* Email */}
              {info.email && (
                <a
                  href={`mailto:${info.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/mail.svg" alt="E-Mail" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoardCard;
