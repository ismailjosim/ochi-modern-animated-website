import { GoArrowUpRight } from 'react-icons/go'

const LandingPage = () => {
    return (
        <section className='w-full h-screen bg-zinc-900 pt-2'>
            <div className='textStructure mt-40 px-20'>
                { ['We Create', 'Eye opening', 'presentation'].map((item, idx) => {
                    return (
                        <div key={ idx } className='masker'>
                            <div className='w-fit flex items-center'>
                                { idx === 1 && (
                                    <div className='w-28 h-16 bg-green-500 mr-5 rounded'> </div>
                                ) }
                                <h1 className='font-Founder uppercase text-8xl leading-none tracking-tighter font-semibold'>
                                    { item }
                                </h1>
                            </div>
                        </div>
                    )
                }) }
            </div>
            <div className='border-t border-zinc-700 mt-32 flex justify-between items-center py-5 px-20 font-Neue'>
                { [
                    'For public and private companies',
                    'From the first pitch to IPO',
                ].map((item, idx) => {
                    return (
                        <p
                            key={ idx }
                            className='text-md font-light tracking-tight leading-none'
                        >
                            { item }
                        </p>
                    )
                }) }
                <div className='start flex gap-2 items-center'>
                    <div className='px-5 py-2 text-md font-light border-2 uppercase border-zinc-500 rounded-full'>
                        Start the project
                    </div>
                    <div className='border-2 border-zinc-500 w-11 h-11 flex justify-center items-center rounded-full'>
                        <GoArrowUpRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage
