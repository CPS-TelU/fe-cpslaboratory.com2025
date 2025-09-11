import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
	return (
		<main className="relative flex flex-col items-center justify-center px-4 pt-20 z-[999] w-full">
			<div className="w-full max-w-3xl space-y-6">
				<Skeleton className="h-10 w-64" />
				<Skeleton className="h-24 w-full rounded-xl" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
					<Skeleton className="h-10 w-full" />
				</div>
				<Skeleton className="h-40 w-full rounded-xl" />
				<Skeleton className="h-10 w-32" />
			</div>
		</main>
	)
}


