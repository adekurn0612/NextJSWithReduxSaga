// import Swal, { SweetAlertResult, DismissReason } from "sweetalert2";

// let timerInterval: NodeJS.Timeout;

// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const b = Swal.getContent().querySelector("b");
//     timerInterval = setInterval(() => {
//       if (b) {
//         b.textContent = Swal.getTimerLeft().toString();
//       }
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result: SweetAlertResult<DismissReason>) => {
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log("I was closed by the timer");
//   }
// });
