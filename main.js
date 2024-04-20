onload = () =>{
        document.body.classList.remove("container");
};
function alert() {
        Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://unsplash.it/400/200",
  imageWidth: 400,
  imageHeight: 200,
  confirmButtonText: "false",             
  imageAlt: "Custom image"
});
