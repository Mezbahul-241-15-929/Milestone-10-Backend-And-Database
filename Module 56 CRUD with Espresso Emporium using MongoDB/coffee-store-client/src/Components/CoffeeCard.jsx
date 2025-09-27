import React from 'react';
import { Link } from 'react-router';
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';



const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, quantity, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the state
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffees);

                        }
                    })
            }
        });
    }

    return (
        <div className="flex bg-[#F5F4F1] shadow-sm rounded ">
            <figure>
                <img
                    src={photo}
                    alt="" />
            </figure>
            <div className="flex mt-8 w-full justify-around">
                <div>
                    <h2 className="font-bold">{name}</h2>
                    <p><span className='font-bold'>Quantity:</span> {quantity}</p>
                    <p><span className='font-bold'>Price:</span> {price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <Link to={`/coffee/${_id}`}>
                            <button className='btn bg-[#b18750] p-1 rounded text-white
                        '>< GrFormView size={25} /></button>
                        </Link>

                        <Link to={`/updateCoffee/${_id}`}><button className='btn bg-[#000000] p-1 rounded text-white
                        '>< CiEdit size={25} /></button></Link>
                        
                        <button onClick={() => handleDelete(_id)} className='btn bg-red-600 p-1 rounded text-white
                        '>< MdDeleteForever size={25} /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;