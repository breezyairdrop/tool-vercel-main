import LoadingDots from '../components/loading-dots'
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './table'  // new
// import '../pages/index.css'


const dataFound1 = [
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
	{
		name: 'Jane Cooper',
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
			accessor: 'name',
			Cell: AvatarCell,
			//   imgAccessor: "imgUrl",
			emailAccessor: "email",
		},
		{
			Header: "Address",
			accessor: 'storeName',
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
			accessor: 'rating',
		},
	], [])

	const dataDisplay = React.useMemo(() => [...dataFound], [])
	return (
		<div className="min-h-screen bg-white dark:bg-black">
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


const DomainCardPlaceholder = ({ pendingData, choosemessage, saveRef }) => {

	// console.log(pendingData)
	let getPendingFetch = localStorage.getItem("dataPending");
	const [pendingFetch, setPendingFetch] = useState(
		JSON.parse(getPendingFetch) ?? ""
	);
	const [runningJob, setRunningJob] = useState(false);
	const [state, setState] = useState({ value: 10 });
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(dataFound2);

	console.log(modalContent)

	const { data } = useSWR(`/api/data?search=${pendingData?.title}&cronId=${pendingData?.jobId}`)
	
	function Modal({ dataFound }) {

		return (
			<div className=' absolute w-full inset-0 mt-20'>
				<div
					className={
						"bg-white dark:bg-black max-w-7xl mx-auto flex justify-between items-center w-full sm:px-4 px-2 px-4 py-2 flex items-center h-14 z-50"
					}
				>
					<div className="flex">
					</div>
					<div className={"ml-auto flex items-center gap-1"}>
					<button className='text-xs text-black dark:text-white' onClick={() => setShowModal(false)}>close modal</button>
					{/* <span>Mode</span> */}
					</div>
				</div>
				{displayTable(dataFound)}
			</div>
		);
	}

	function displayContent(content) {
		console.log(content)
		setModalContent(content)
		setShowModal(true)
	}

	async function timeFunc() {
		console.log('initttt')


		if (data && pendingData.jobId == data.cronId) {
			// setState((prev) => {
			//   return { ...prev };
			// });
			// pendingData.result = data.result
			pendingFetch.forEach((product) => {
				if (product.jobId == data.cronId) {
					product.result = data.result
				}
			})
			localStorage.setItem("dataPending", JSON.stringify(pendingFetch));
		}
	}

	async function extraCheck() {
		if (runningJob == true) {
			// data += 1
			let whenDone = await timeFunc()
			console.log('running', whenDone)

		} else {
			console.log('not running')
		}
	}

	useEffect(() => {
		if (pendingData.result.length == 0) {
			setRunningJob(true)
			// setRunningJob(false)
		} else {
			setRunningJob(false)
		}
	}, [pendingData])

	extraCheck()
	// { data } = useSWR(`/api/data/?search=${pendingData?.title}&cronId=${pendingData?.jobId}`)
	return (
		<>
			<div ref={saveRef} className="w-full max-w-1xl sm:max-w-2xl">
				<div className="w-full max-w-1xl sm:max-w-2xl">
					<div id="pendingFetch">
						{
							pendingData.result.length == 0 ? (
								<div key={pendingData?.jobId}>
									<div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
										<div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
											<div className="text-left font-semibold flex items-center">
												{pendingData?.title}
											</div>
											<p className="text-black text-gray-500 font-normal text-sm">
												{pendingData?.vibe}
											</p>
											<div className="text-black text-gray-500 font-normal text-sm">
												<div className="h-7 w-36 bg-gray-300 rounded-md animate-pulse" />

											</div>
										</div>
										<div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
											<a
												className=" text-left font-semibold flex items-center"
											>
												<span className="inline-block ml-2"></span>
											</a>
											<div className="flex space-x-3">
												<button onClick={() => setShowModal(true)}>show modal</button>
												<button
													className="cursor-not-allowed bg-gray-100 text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
												>
													<LoadingDots />
												</button>
												<button
													className={`g-red-500 text-red-500 border-red-500 hover:text-white hover:bg-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
												>
													remove
												</button>
											</div>
										</div>
									</div>
									<div>
									</div>
								</div>
							) : (
								<div key={pendingData?.jobId} className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
									<div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
										<div className='text-left font-semibold flex items-center'>{pendingData?.title}</div>
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
											<span className="inline-block ml-2">

											</span>
										</a>
										<div className="flex space-x-3">
											<button
											onClick={displayContent(pendingData?.result)
												// setModalContent(pendingData?.result) &&
												// setShowModal(true)
											}
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
							)
						}
					</div>
				</div>
				<div>
				</div>
			</div>
			{/* {showModal && <Modal dataFound={modalContent} />} */}
		</>
	)
}

export default DomainCardPlaceholder



