export default function BasicSettigs() {
  const tableItems = [
    {
      Name: "Full Name",
      Value: "Liam James",
    },
    {
      Name: "Email",
      Value: "liamjames@example.com",
    },
    {
      Name: "Phone",
      Value: "+88014044201",
    },
    {
      Name: "Role",
      Value: "Seller",
    },
    {
      Name: "Address",
      Value: "31 North Banani, Dhaka",
    },
    {
      Name: "Company",
      Value: "New Green Corporations Ltd.",
    },
    {
      Name: "Tax Token No",
      Value: "1x321ui2-6y3",
    },
    {
      Name: "Business Reg. No",
      Value: "852361-23600123381",
    },
    {
      Name: "Bank Account Number",
      Value: "301-3368704123",
    },
    {
      Name: "Accounte Holder Name",
      Value: "Liam James",
    },
    {
      Name: "Bank Name",
      Value: "City Bank",
    },
    {
      Name: "Bank Branch Name",
      Value: "Gulshan 2,Dhaka",
    },
    {
      Name: "Emergency Contact Name",
      Value: "Gyiow Tae",
    },
    {
      Name: "Emergency Contact's Phone",
      Value: "+880139162931",
    },
    {
      Name: "Emergency Contact's Address",
      Value: "31 North Banani, 212/c House:41, Dhaka",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto md:px-8">
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <tbody className="text-gray-600 divide-y text-lg">
            {tableItems.map((item, idx) => (
              <tr
                key={idx}
                className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
              >
                <td className=" pl-4 pr-1 md:px-6 py-4 bg-slate-300 font-bold flex-wrap">
                  {item.Name}
                </td>
                <td className="px-2 md:px-6 py-4 ">{item.Value}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="/"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    href="/"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
