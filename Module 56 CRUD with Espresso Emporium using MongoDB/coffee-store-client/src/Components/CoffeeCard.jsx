import React from 'react';
import { Link } from 'react-router';
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';



const CoffeeCard = ({ coffee }) => {
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
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
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
                        <button className='btn bg-[#b18750] p-1 rounded text-white
                        '>< GrFormView size={25} /></button>
                        <button className='btn bg-[#000000] p-1 rounded text-white
                        '>< CiEdit size={25} /></button>
                        <button onClick={() => handleDelete(_id)} className='btn bg-red-600 p-1 rounded text-white
                        '>< MdDeleteForever size={25} /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;