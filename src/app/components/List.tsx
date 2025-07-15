import { students } from "../data/students"


export const List = () => {
    return (

        <table className="table-auto w-full bg-blue-900 text-center text-m">
            <thead  >
                <tr className="border-2" >
                    <th>

                        Nome:
                    </th>
                    <th>
                        Status
                    </th>
                    <th >
                        Grade 1
                    </th>
                    <th >
                        Grade2
                    </th>
                    <th >
                        Grade final
                    </th>
                </tr>

            </thead>
            <tbody className="border-2">



                {students.map((student) => (
                    <tr key={student.id} className="border-2 bg-gray-600 ">

                        <td className="text-center p-1 text-neutral-900 flex items-center flex-col ">
                            <div className="flex items-center gap-2 text-center justify-center">
                                <img src={student.avatar} className="w-10 h-10 rounded-full mr-3 " />
                                <span className="font-extrabold">{student.name}</span>
                                
                            </div>
                           
                            {student.email}
                        </td>

                        <td className="p-1" >

                            {student.active == true && <button className="bg-green-600 rounded-3xl w-20"> Ativo </button>}

                            {student.active != true && <button className="bg-red-700 rounded-3xl w-20">Inativo </button>}

                        </td>

                        <td className="" >
                            {student.grade1}


                        </td>
                        <td className="">
                            {student.grade2}
                        </td>
                        <td className="">
                            {student.active == true && ((student.grade1 + student.grade2) / 2).toFixed(1)}
                            {student.active ==false && <h1>---</h1>}
                        </td>
                    </tr>
                ))}



            </tbody>

        </table>







    )


}