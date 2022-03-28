
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function SweetAlert2() {

  const MySwal = withReactContent(Swal)

  MySwal.fire({
    position: 'top-end',
    icon: 'success',
    title: <p>Agregado correctamente</p>,
    showConfirmButton: false,
    timer: 1500,
  })

  return <div>SweetAlert2</div>;
}

export default SweetAlert2;