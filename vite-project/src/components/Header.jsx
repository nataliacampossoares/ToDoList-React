function Header() {
    return(
        <div className="bg-gray700 flex flex-col items-center justify-center">
            <img src="/Logo.png"/>
            <div className="flex">
                <input type="text" className="bg-lightBlue border-gray700 w-96 h-10"/>
                <button className="bg-darkBlue flex items-center gap-2">Criar <img src="/plus.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Header