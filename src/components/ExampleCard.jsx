/* eslint-disable react/prop-types */

function ExampleCard({cardTitle ,cardDescription,handleClick}){
    const openInNewTab = (link) => {
        window.open(link);
      };
    return(
        <div className="flex flex-col relative m-5 items-center border-forest-400 border-4 rounded-[33px] cursor-pointer" onClick={() => openInNewTab(handleClick)}>
            <h2 className='relative font-bold text-xl p-3'>{cardTitle}</h2>
            <p className="relative">{cardDescription}</p>
        </div>
    )
}

export default ExampleCard;

