/* eslint-disable react/prop-types */

function ExampleCard({imageSource, cardTitle ,cardDescription}){

    return(
        <div className="flex flex-col relative m-5 items-center border-forest-400 border-4 rounded-[33px] cursor-pointer">
            <img src={imageSource} className='relative opacity-50 rounded-t-[30px]'/>
            <h2 className='relative font-bold text-xl p-3'>{cardTitle}</h2>
            <p className="relative">{cardDescription}</p>
        </div>
    )
}

export default ExampleCard;

