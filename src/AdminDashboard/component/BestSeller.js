export default () => {
  const tableItems = [
    {
      name: "Liam James",
      revenue: "$10k",
      sell: "$100K",
    },
    {
      name: "Olivia Emma",
      revenue: "$10k",
      sell: "$90K",
    },
    {
      name: "William Benjamin",
      revenue: "$10k",
      sell: "$80K",
    },
    {
      name: "Henry Theodore",
      revenue: "$10k",
      sell: "$120K",
    },
    {
      name: "Amelia Elijah",
      revenue: "$10k",
      sell: "$75K",
    },
  ];

  return (
    <div className=" mx-auto px-4">
      <div className="">
        <h3 className="text-gray-800 text-xl font-bold sm:text-4xl my-12">
          Best Seller
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg ">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-1">Username</th>

              <th className="py-3 px-1">Revenue</th>
              <th className="py-3 px-1">Sell</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-1 py-4 ">{item.name}</td>
                <td className="px-1 py-4 ">{item.revenue}</td>
                <td className="px-1 py-4 ">{item.sell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
