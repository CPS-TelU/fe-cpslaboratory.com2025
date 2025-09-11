import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<main className="flex items-start justify-center pt-20 pb-8 px-4 sm:px-8 relative min-h-[60vh]">
			<section className="relative w-full max-w-6xl mx-auto p-6 sm:p-10 overflow-hidden">
				<div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
					<div className="lg:w-1/2 flex flex-col gap-4">
						<Skeleton className="h-12 w-48" />
						<Skeleton className="h-24 w-full" />
						<Skeleton className="h-8 w-32" />
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<Skeleton className="h-24 w-full" />
							<Skeleton className="h-24 w-full" />
						</div>
					</div>
					<div className="flex-1 min-w-[300px]">
						<Skeleton className="h-[300px] w-full rounded-xl" />
					</div>
				</div>
			</section>
			<section className="w-full">
				<div className="bg-gradient-to-br from-[#2a0a0f] via-red-800 to-[#2a0a0f] w-full flex items-center justify-center mb-6 md:mb-12 mt-0 md:mt-2 p-4 relative overflow-hidden rounded-3xl">
					<div className="relative z-10 flex flex-col items-center w-full">
						<div className="text-center mb-6 md:mb-12 mt-2 md:mt-4">
							<Skeleton className="h-12 w-[22rem] md:w-[32rem] rounded mx-auto" />
						</div>
						<div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center gap-4">
							<Skeleton className="w-56 h-56 md:w-64 md:h-64 rounded-2xl" />
							<Skeleton className="w-56 h-56 md:w-64 md:h-64 rounded-2xl" />
							<Skeleton className="w-56 h-56 md:w-64 md:h-64 rounded-2xl" />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}


