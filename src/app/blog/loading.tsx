import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<main className="min-h-screen bg-white">
			<section className="pt-32 pb-16 px-4">
				<div className="max-w-6xl mx-auto text-center space-y-4">
					<Skeleton className="h-8 w-64 mx-auto" />
					<Skeleton className="h-10 w-96 mx-auto" />
					<Skeleton className="h-6 w-[36rem] max-w-full mx-auto" />
				</div>
			</section>
			<section className="pb-20 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-end justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28">
						<Skeleton className="h-48 w-64 lg:h-56 lg:w-80 rounded-2xl" />
						<Skeleton className="h-56 w-80 lg:h-64 lg:w-96 rounded-2xl" />
						<Skeleton className="h-80 w-96 lg:h-96 lg:w-[28rem] rounded-2xl" />
						<Skeleton className="h-56 w-80 lg:h-64 lg:w-96 rounded-2xl" />
						<Skeleton className="h-48 w-64 lg:h-56 lg:w-80 rounded-2xl" />
					</div>
					<div className="mt-16">
						<Skeleton className="h-8 w-64 mx-auto mb-12" />
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{Array.from({ length: 6 }).map((_, i) => (
								<div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
									<Skeleton className="h-48 w-full" />
									<div className="p-6 space-y-3">
										<Skeleton className="h-6 w-3/4" />
										<Skeleton className="h-4 w-5/6" />
										<Skeleton className="h-4 w-4/6" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}


