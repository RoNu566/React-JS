import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../../assets/firebase';
import { useCarritoContext } from "../../context/CarritoContext";
import { toast } from 'react-toastify';

const Checkout = () => {
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]
       
        if(cliente.email === cliente.email2){
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)

                } else {
                    toast.error(`El item ${prodBDD.nombre} no tiene stock suficiente, intenta mas tarde`)
                    emptyCart()
                }
            })
        })
            createOrdenCompra(cliente,totalPrice(), new Date().toISOString()).then(ordenCompra => {
                getOrdenCompra(ordenCompra.id).then(item => {
                    toast.success(`¡Muchas gracias por su compra, su compra es ${item.id}`)
                    emptyCart()
                    e.target.reset()
                    navigate("/")
                }).catch(error => {
                    toast.error("Su compra no fue generada")
                    console.error(error)
                })
                
            })
        }
        else{
            toast.error("Revice los campos y vuelva a intentarlo!")
        
        }
    }
    return (
        <div className="container" style={{marginTop: "20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Verificar E-mail</label>
                    <input type="email" className="form-control" name="email2" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero de Telefono</label>
                    <input type="number" className="form-control" name="celular" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required/>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    )}

    export default Checkout;