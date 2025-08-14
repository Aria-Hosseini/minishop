import AddProduct from "@/app/components/aDashboard/AddProduct";
import SidebarDashboardAdmin from "@/app/components/SideBarDashboardAdmin";

export default function AddProductM (){
    return(
        <>
        <div className="flex h-screen bg-gray-100">
        
            <SidebarDashboardAdmin />
        
            <AddProduct />
                
            </div>
        </>
    )
}