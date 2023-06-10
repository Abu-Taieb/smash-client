const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-gradient-to-r from-red-600 to-white text-white font-bold hover:from-white hover:to-red-600 border-red-300 my-10 drawer-button lg:hidden"
          >
            Dashboard Menu
          </label>
          <div className="text-center">
            <h2 className="font-bold text-4xl uppercase my-5">Dashboard</h2>
            <hr className="w-20 mx-auto border-2 border-red-600 mb-10" />
            <p className="mb-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              ipsa veritatis ab laborum nihil delectus dolore modi a minima.
              Ipsa repudiandae hic tenetur minus dolores, veniam ipsam maiores
              molestias facere distinctio quaerat quos neque aspernatur rerum
              accusamus esse excepturi, veritatis, accusantium voluptas rem quas
              eaque aut quis consequuntur. Magni, consectetur?
            </p>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-black text-white font-bold uppercase text-">
            {/* Sidebar content here */}
            <li>
              <a>My Selected Classes <span className="badge badge-secondary">+99</span></a>
            </li>
            <li>
              <a>My Enrolled Classes <span className="badge badge-secondary">+73</span></a>
            </li>
            <li>
              <a>Payment</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
