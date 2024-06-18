
import { useState } from 'react'
import LoadingDots from "@/components/LoadingDots";


function displayData(resultContent) {

    console.log(resultContent)

let resultListTemp = '';
let resultTitle = '';
resultContent?.forEach(company => {
console.log(company)
resultTitle = company?.category;
resultListTemp += `<tr>
    <td>${company?.storeName}</td>
    <td>${company?.address}</td>
    <td>${company?.phone}</td>
    <td>${company?.bizWebsite}</td>
    <td>${company?.ratingText}</td>
    </tr>`

});

return `

<head>

<link href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/rwd.table.min.css" rel="stylesheet" type="text/css" />
<style>

.table-bordered {
border: 1px solid #ddd !important;
}

table caption {
padding: .5em 0;
}

@media screen and (max-width: 767px) {
table caption {
display: none;
}
}

.sticky-table-header {
background-image: linear-gradient(90deg, #cf331e, #ffffff);
}
.table-responsive {
border-radius: 50px;
}
/* thead {
background-color: #7f7f81;
border-radius: 50px;
border: 1px #000;
color: #7f7f81;
border-bottom: 1px solid #3e3e3e;
} */
</style>
</head>
<body>
<div id="resultTable">

<div>${resultTitle} around Texas (${displayData?.length} )</div>
<div class="text-center">
<button class="btn btn-default"><span class="glyphicon glyphicon-arrow-down"></span> DOWNLOAD DATA</button>
</div>
<br>
<div class="container">
<div class="row">
<div class="col-xs-12">
  <div class="table-responsive" data-pattern="priority-columns">
    <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" class="table table-bordered">
      <!-- <caption class="text-center">An example of a responsive table based on RWD-Table-Patterns' <a href="http://gergeo.se/RWD-Table-Patterns/" target="_blank"> solution</a>:</caption> -->
      <thead>
        <tr>
          <th>Company Name</th>
          <th data-priority="1">Address</th>
          <th data-priority="2">Phone</th>
          <th data-priority="3">Website</th>
          <th data-priority="4">Rating</th>
        </tr>
      </thead>
      <tbody>
        ${resultListTemp}
      </tbody>
    </table>
  </div>
  <button class="btn btn-default"><span class="glyphicon glyphicon-arrow-down"></span> DOWNLOAD DATA</button>
</div>
</div>
</div>

</div>


<script
src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
type="text/javascript"
></script>
<script
src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min.js"
type="text/javascript"
></script>
<script
src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/rwd-table-patterns.js"
type="text/javascript"
></script>
<script defer>

</script>
</body>

`;
}

function Modal(resultContent) {
    console.log(resultContent)
    let resultListTemp = '';
let resultTitle = '';
resultContent?.forEach(company => {
console.log(company)
resultTitle = company?.category;
resultListTemp += `<tr>
    <td>${company?.storeName}</td>
    <td>${company?.address}</td>
    <td>${company?.phone}</td>
    <td>${company?.bizWebsite}</td>
    <td>${company?.ratingText}</td>
    </tr>`

});
    // displayData
    // console.log(resultContent)
    return (
        <div style={{zIndex: 100}} className="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full flex items-center justify-center">
          <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
              <div className="mt-2 px-7 py-3">
              {/* <div dangerouslySetInnerHTML={{ __html: displayData(resultContent) }}></div> */}
              </div>
              <div className="flex justify-center mt-4">
    
                yoooo
    
                {/* Using useRouter to dismiss modal*/}
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Close
                </button>
    
              </div>
            </div>
          </div>
        </div>
      );
    // return (
    //     <>
    //         <dialog
    //             className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
    //             <div className="bg-white m-auto p-8">
    //                 <div className="flex flex-col items-center">
    //                 <div dangerouslySetInnerHTML={{ __html: displayData() }}></div>
    //                     <br/>
    //                     <button type="button" className="bg-red-500 text-white p-2 ">Close Modal</button>
    //                 </div>

    //             </div>
    //         </dialog>
    //     </>
    // );
}

const ResultCard = ({storedData}) => {

    const [showModal, setShowModal] = useState(false);

    // console.log(storedData)
//   const { data: domainInfo, isValidating } = useSWR(
//     `/api/check-domain?domain=${domain}`,
//     fetcher,
//     { revalidateOnMount: true, refreshInterval: 5000 }
//   )
  const [removing, setRemoving] = useState(false)
  return (
    <div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
        {/* <span className="text-xl font-semibold text-center items-center">Eatery in Uyo</span> */}
      
      <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
      {/* <div className="w-6 h-6 rounded-full bg-gray-300 animate-pulse" /> */}
      <div className='text-left font-semibold flex items-center'>{storedData?.title}</div>
      <p className="text-black text-gray-500 font-normal text-sm">
        {storedData?.vibe}
      </p>
      <p className="text-black text-gray-500 font-normal text-sm">
        {storedData?.result?.length} results
      </p>
    </div>
    <div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
        <a
          href={`http://kufre.me`}
          target="_blank"
          rel="noreferrer"
          className=" text-left font-semibold flex items-center"
        >
          <span className="inline-block ml-2">
            
          </span>
        </a>
        <div className="flex space-x-3">
          <button
          onClick={() => setShowModal(true)}
          
        //   onClick={() => Modal(storedData?.result)}
            // disabled={isValidating}
            className={`bg-white hover:text-black hover:border-black text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
          >
            Open
            {/* <LoadingDots /> */}
            {/* {isValidating ? <LoadingDots /> : 'Refresh'} */}
          </button>
          {showModal &&
            <Modal resultContent={storedData?.result} />
        }
          <button
            // onClick={async () => {
            //   setRemoving(true)
            //   try {
            //     await fetch(`/api/remove-domain?domain=${domain}`)
            //     await revalidateDomains()
            //   } catch (error) {
            //     alert(`Error removing domain`)
            //   } finally {
            //     setRemoving(false)
            //   }
            // }}
            // disabled={removing}
            className={`${
              removing ? 'cursor-not-allowed bg-gray-100' : ''
            }bg-red-500 text-white border-red-500 hover:text-red-500 hover:bg-white py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
          >
            {removing ? <LoadingDots /> : 'Remove'}
          </button>
        </div>
      </div>

      {/* <ConfiguredSection domainInfo={domainInfo} /> */}
    </div>
  )
}

export default ResultCard
