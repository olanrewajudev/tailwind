import Swal from 'sweetalert2'

 export const SweetAlert = (title, text, icon) => {
  return Swal.fire({
    title: title,
    text: text, 
    icon: icon,
    showConfirmButton: false
  })
}

export default SweetAlert
