import {  FoodBank, GasMeter, LocalGroceryStore, MiscellaneousServices, ShoppingBag, SportsGymnastics } from "@mui/icons-material"

const Categories = () => {
  return (
    <div className="p-2 mt-2">
        <header className="mb-2 ml-3">
            <p className="text-2xl font-medium font-mono ">Categories</p>
        </header>
        <section className="p-2 grid grid-cols-3 gap-2 mt-6 gap-y-[2rem]">
            <div className="flex flex-col gap-1 justify-center items-center">
                <ShoppingBag/>
                <p>Shoping</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <LocalGroceryStore/>
                <p>Grocery</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <FoodBank/>
                <p>Food</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <GasMeter/>
                <p>Fuel</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <SportsGymnastics/>
                <p>Gym</p>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <MiscellaneousServices/>
                <p>Other</p>
            </div>
        </section>
    </div>
  )
}

export default Categories
