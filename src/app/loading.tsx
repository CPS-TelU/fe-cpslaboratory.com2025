import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<main>
			<section className="flex items-center justify-center px-4 px-6 lg:px-8 py-22 pb-4 relative mt-32 md:pt-0 mb-20 md:mb-20">
				<div className="relative w-[95vw] max-w-[1200px] h-[35vh] md:h-[70vh] max-h-[600px] overflow-hidden mx-auto rounded-2xl shadow-2xl md:mt-8 mt-[-8rem]">
					<div className="absolute inset-0 grid place-content-center gap-6 p-6">
						<div className="flex items-center justify-center gap-4">
							<Skeleton className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-lg" />
							<div className="flex flex-col items-start gap-2">
								<Skeleton className="h-6 sm:h-8 md:h-10 w-48 sm:w-72 md:w-96" />
								<Skeleton className="h-6 sm:h-8 md:h-10 w-40 sm:w-64 md:w-80" />
							</div>
						</div>
						<Skeleton className="h-3 sm:h-4 w-3/4 max-w-[48rem]" />
					</div>
					<Skeleton className="absolute inset-0 rounded-2xl" />
				</div>
			</section>
			<section className="relative min-h-screen pt-0 md:pt-[-200px]">
				<div className="flex flex-col items-center text-center gap-4 mb-10">
					<div className="flex items-center gap-2">
						<Skeleton className="h-9 w-9 md:h-12 md:w-12 rounded" />
						<Skeleton className="h-8 md:h-10 w-48 md:w-64 rounded" />
					</div>
					<Skeleton className="h-4 md:h-6 w-64 md:w-[36rem]" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4">
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={i} className="border-none rounded-xl p-4">
							<Skeleton className="h-6 w-40 mx-auto mb-4" />
							<Skeleton className="h-[300px] w-full rounded-xl" />
						</div>
					))}
				</div>
				<div className="items-center flex justify-center p-12">
					<Skeleton className="h-10 w-32 rounded" />
				</div>
			</section>
			<section className="md:py-2 py-20">
				<div className="text-center flex items-center justify-center">
					<Skeleton className="h-12 w-[22rem] md:w-[32rem] rounded" />
				</div>
				<div className="mt-8 space-y-6">
					<Skeleton className="h-32 w-full" />
					<Skeleton className="h-32 w-full" />
				</div>
			</section>
			<section className="min-h-screen">
				<div className="text-center p-6 px-24">
					<Skeleton className="h-12 w-64 mx-auto" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-40 gap-8">
					<div className="flex flex-col">
						<Skeleton className="w-[750px] max-w-full h-[315px] rounded-3xl" />
						<div className="py-4 space-y-2">
							<Skeleton className="h-8 w-3/4" />
							<Skeleton className="h-4 w-5/6" />
							<Skeleton className="h-4 w-4/6" />
						</div>
					</div>
					<div className="flex flex-col gap-2 items-center self-center">
						{[1,2,3].map(i => (
							<Skeleton key={i} className="w-[368px] h-[215px] rounded-3xl" />
						))}
					</div>
				</div>
			</section>
		</main>
	)
}


