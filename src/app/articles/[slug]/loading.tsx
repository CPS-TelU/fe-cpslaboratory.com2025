import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<main className="min-h-screen bg-white">
			<section className="pt-32 pb-16 px-4">
				<div className="max-w-4xl mx-auto">
					<Skeleton className="h-8 w-3/4 mb-4" />
					<Skeleton className="h-6 w-1/2 mb-8" />
					<Skeleton className="h-96 w-full rounded-2xl mb-12" />
					<div className="space-y-4">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
						<Skeleton className="h-4 w-4/6" />
						<Skeleton className="h-4 w-full" />
					</div>
				</div>
			</section>
		</main>
	)
}


