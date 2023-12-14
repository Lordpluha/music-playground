import type { Metadata } from 'next'

import 'normalize.css'

import { Titillium_Web } from 'next/font/google'
import './globals.scss'

import Navbar from '@/components/ui/navbar/Navbar'
import Sidebar from '@/components/ui/sidebar/Sidebar'
import Wrapper from '@/components/ui/wrapper/Wrapper'

const WF_titillium_web = Titillium_Web({
	subsets: ['latin'],
	weight: '400',
	variable: '--wf-titilium'
})

export const metadata: Metadata = {
	title: 'Spotify clone',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={WF_titillium_web.className}>
				<Wrapper orientation={'full'}>
					<Wrapper level={1} orientation={'full'} customStyles={'min-h-full h-full'}
					>
						<Sidebar />

						<Wrapper
							level={2}
							orientation={'vertical'}
							customStyles='flex grow max-h-full z-1 ml-3 overflow-y-scroll'
						>
							<main className='w-full'>
								<Navbar/>
								{children}
							</main>
						</Wrapper>
					</Wrapper>
				</Wrapper>
			</body>
		</html>
	)
}
