import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { AppRouter, appRouter } from '@/trpc/index'
// import { CreateNextContextOptions } from '@trpc/server/adapters/next'

const handler = (req: Request) =>
	fetchRequestHandler<AppRouter>({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: async (opts) => {},
	})

export { handler as GET, handler as POST }
