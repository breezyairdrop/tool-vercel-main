import React, { useState, useEffect, useRef } from "react";
import DropDown, { VibeType } from "@/components/DropDown";
import LoadingDots from "@/components/LoadingDots";
import Toggle from "@/components/Toggle";
// import ResultCard from "@/components/ResultCard";
import DomainCardPlaceholder from "@/components/domain-card-placeholder";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './table'  // new
import '../pages/index.css'



const dataFound2 = [
	{
		name: 'Kufbreezy',
		email: 'cameron.williamson@example.com',
		title: 'Internal displayTablelications Engineer',
		department: 'Security',
		status: 'Active',
		role: 'Member',
		rating: 24,
		imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Mankuffo',
		email: 'jane.cooper@example.com',
		title: 'Regional Paradigm Technician',
		department: 'Optimization',
		status: 'Active',
		role: 'Admin',
		rating: 27,
		imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Cody Fisher',
		email: 'cody.fisher@example.com',
		title: 'Product Directives Officer',
		department: 'Intranet',
		status: 'Inactive',
		role: 'Owner',
		rating: 43,
		imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Esther Howard',
		email: 'esther.howard@example.com',
		title: 'Forward Response Developer',
		department: 'Directives',
		status: 'Active',
		role: 'Member',
		rating: 32,
		imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Jenny Wilson',
		email: 'jenny.wilson@example.com',
		title: 'Central Security Manager',
		department: 'Program',
		status: 'Offline',
		role: 'Member',
		rating: 29,
		imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Kristin Watson',
		email: 'kristin.watson@example.com',
		title: 'Lean Implementation Liaison',
		department: 'Mobility',
		status: 'Inactive',
		role: 'Admin',
		rating: 36,
		imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
	{
		name: 'Cameron Williamson',
		email: 'cameron.williamson@example.com',
		title: 'Internal displayTablelications Engineer',
		department: 'Security',
		status: 'Active',
		role: 'Member',
		rating: 24,
		imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
	},
]

function displayTable(dataFound) {

	const columns = React.useMemo(() => [
		{
			Header: "Name",
			accessor: 'storeName',
			Cell: AvatarCell,
			//   imgAccessor: "imgUrl",
			emailAccessor: "bizWebsite",
		},
		{
			Header: "Address",
			accessor: 'address',
		},
		{
			Header: "Email",
			accessor: 'status',
			Cell: StatusPill,
		},
		{
			Header: "Website",
			accessor: 'role',
			Filter: SelectColumnFilter,  // new
			filter: 'includes',
		},
		{
			Header: "Phone",
			accessor: 'phone',
		},
		{
			Header: "Rating",
			accessor: 'ratingText',
		},
	], [])

	const dataDisplay = React.useMemo(() => [...dataFound], [])
	return (
		<div className="min-h-screen ">
			<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
				<div className="">
					{/* <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1> */}
				</div>
				<div className="mt-6">
					<Table columns={columns} data={dataDisplay} />
				</div>
			</main>
		</div>
	);
}


const SearchBar = () => {
  let getPendingFetch = localStorage.getItem("dataPending");
  // localStorage.removeItem("dataPending");
  // let storedArray = localStorage.getItem("storedFetch");

  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [vibe, setVibe] = useState("Google");
  const [isPro, setIsPro] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [pendingFetch, setPendingFetch] = useState(
    JSON.parse(getPendingFetch) ?? ""
  );
  const childRef = useRef(null);
  const [margin, updateMargin] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(dataFound2);
  const [message, setMessage] = useState("Hello World!");
  const [state, setState] = useState({ value: 10 });
  function choosemessage(msg) {
    console.log(msg);
    // setState((prev) => {
    //   return { ...prev };
    // });
  }

  // setState((prev) => {
  //       return { ...prev };
  //     });

  let cronId;
  // useEffect(() => {
  //   updateMargin(margin);
  //   // storedFetch || pendingFetch != "" ? setIsSubmitted(true) : null;
  // }, []);

  function displayContent(content) {
		console.log(content)
		setModalContent(content)
		setShowModal(true)
	}

  function Modal({ dataFound }) {

		return (
			<div className='bg-white dark:bg-gray-900 opacity-1 fixed overflow-auto w-full inset-0'>
				<div
					className={
						" max-w-7xl mx-auto flex justify-between items-center w-full sm:px-4 px-2 px-4 py-2 flex items-center h-14 z-50"
					}
				>
					<div className="flex">
					</div>
					<div className={"ml-auto flex items-center gap-1"}>
					<button className={`g-red-500 text-red-500 border-red-500 hover:text-white hover:bg-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`} onClick={() => setShowModal(false)}>close modal</button>
					{/* <span>Mode</span> */}
					</div>
				</div>
				{displayTable(dataFound)}
			</div>
		);
	}

  function removeAnimation() {
    setTextArea("");
  }

  function getResult() {
    cronId = Math.random().toString().slice(2);

    // console.log('cronId', cronId)
    if (searchString != "") {
      // setState((prev) => {
      //   return { ...prev };
      // });
      setTextArea("animated zoomOutDown");
      onFormSubmit();
      // initSearchResult()

      setTimeout(removeAnimation, 900);
    } else {
      alert("enter search field");
    }
  }

  const onFormSubmit = () => {
    // const { data } = useSWR('/api/data')

    // data ? setStreamData(data) : ""

    function putResult() {
      // let jobId = uuidv4()
      if (pendingFetch == null || pendingFetch == "") {
        setPendingFetch([
          {
            jobId: cronId,
            title: searchString,
            vibe: vibe,
            result: [],
          },
        ]);

        localStorage.setItem(
          "dataPending",
          JSON.stringify([
            {
              jobId: cronId,
              title: searchString,
              vibe: vibe,
              result: [],
            },
          ])
        );
        // setIsSubmitted(true);
      } else {
        pendingFetch.unshift({
          jobId: cronId,
          title: searchString,
          vibe: vibe,
          result: [],
        });

        // setIsSubmitted(true);
        // pendingFetch.unshift(pendingFetch)
        localStorage.setItem("dataPending", JSON.stringify(pendingFetch));
      }
    }

    if (pendingFetch == null || pendingFetch == "") {
      setTimeout(putResult, 900);
    }
    else {
      setTimeout(putResult, 0);
    }
  };

  return (
    <>
      <div className="mt-7 " style={{ scale: 1.15 }}>
        <Toggle isPro={isPro} setIsPro={setIsPro} />
        {/* <Toggle colorTheme={checkTheme} isPro={isPro} setIsPro={setIsPro} /> */}
      </div>

      <div className="max-w-xl w-full">
        <div className="flex mt-10 items-center space-x-3">
          <p className="text-sm text-left font-medium">
            Your limitation is a function of your imagination{" "}
            <span className="text-sm text-gray-400">(trust me, I'm lying)</span>
            .
          </p>
        </div>
        <textarea
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          rows={4}
          id="textField"
          // data-animation="animated zoomOutDown"
          className={`${textArea} w-full max-w-1xl sm:max-w-2xl rounded-md mb-10 items-center border-gray-300 shadow-sm focus:border-black focus:ring-black`}
          placeholder={"e.g. Oil company in USA"}
        />
        <div className="flex items-center space-x-3">
          <p className="text-left font-medium">Select your vibe.</p>
        </div>
        <div className="block">
          <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
        </div>

        {!loading && (
          <div className="flex items-center mt-10 justify-items-center">
            <button
              onClick={(e) => {
                e.preventDefault();

                // setIsSubmitted(true)
                getResult();
              }}
              style={{ height: "100px" }}
              // className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20 bg-red-500 text-white border-red-500 hover:text-red-500 hover:bg-white text-sm border-solid border rounded-md focus:outline-none rotating-text-wrapper"
              className="flex w-full flex-col items-center justify-center text-center bg-white text-black border-black hover:text-white hover:bg-gray-500 py-1.5 text-sm border-solid border rounded-md focus:outline-none rotating-text-wrapper"
            >
              <span>
                <b>Apply</b> <b> Pressure</b>
              </span>
              <span>
                <b>Powers</b>
                <b> on your Fingertips</b>
              </span>
              <span>
                <b>Lets</b>
                <b> fucking go</b>
              </span>
            </button>
          </div>
        )}
        {loading && (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            disabled
          >
            <LoadingDots color="white" style="large" />
          </button>
        )}
      </div>
      <div className="w-full max-w-1xl sm:max-w-2xl">
        {/* <p>{message}</p> */}
        <div className="w-full max-w-1xl sm:max-w-2xl">
          <div id="pendingFetch">
            {pendingFetch
              ? pendingFetch.map((pendingData, index) => {
                  if (pendingData?.result?.length == 0) {
                    return (
                      <DomainCardPlaceholder
                        saveRef={childRef}
                        choosemessage={choosemessage}
                        key={index}
                        pendingData={pendingData}
                      />
                    );
                  } else {
                    return (
                      <div
                        key={pendingData?.jobId}
                        className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4"
                      >
                        <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
                          <div className="text-left font-semibold flex items-center">
                            {pendingData?.title}
                          </div>
                          <p className="text-black text-gray-500 font-normal text-sm">
                            {pendingData?.vibe}
                          </p>
                          <p className="text-black text-gray-500 font-normal text-sm">
                            {pendingData?.result?.length} results
                          </p>
                        </div>
                        <div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
                          <a
                            href={`http://kufre.me`}
                            target="_blank"
                            rel="noreferrer"
                            className=" text-left font-semibold flex items-center"
                          >
                            <span className="inline-block ml-2"></span>
                          </a>
                          <div className="flex space-x-3">
                          <button onClick={() => setShowModal(true)}>show modal</button>
                            <button
                            onClick={() => displayContent(pendingData?.result)
                              // setModalContent(pendingData?.result) &&
                              // setShowModal(true)
                            }
                              // onClick={() => {
                              //   setAdding(true)
                              //   console.log(adding)
                              //   console.log(runningJob)
                              // }}
                              className={`bg-white hover:text-black hover:border-black text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
                            >
                              Open
                            </button>
                            <button
                              className={`g-red-500 text-red-500 border-red-500 hover:text-white hover:bg-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
                            >
                              remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              : ""}
            {/* {pendingFetch ? (
              <DomainCardPlaceholder
                // key={index}
                pendingFetch={pendingFetch}
              />
            ) : (
              // pendingFetch.map((pendingData, index) => {
              //     if (pendingData) {
              //       return (
              //         <DomainCardPlaceholder
              //           key={index}
              //           pendingData={pendingData}
              //         />
              //       );
              //     }
              //   })
              ""
            )} */}
          </div>
          {showModal && <Modal dataFound={modalContent} />}
        </div>
        <div></div>
        {/* {showModal && <Modal dataFound={modalContent} />} */}
        {/* {showModal && <Modal />} */}
      </div>
      {/* <div>Result: {favNumber}</div> */}
    </>
  );
};

export default SearchBar;
