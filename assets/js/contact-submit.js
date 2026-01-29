document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  const btn = form.querySelector("button");
  btn.disabled = true;

  Swal.fire({
    title: 'Mengirim Pesan...',
    text: 'Mohon tunggu sebentar',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {
    const response = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {

      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Pesan berhasil dikirim',
        confirmButtonText: 'OK'
      }).then(() => {

        window.location.href = "https://steksa.net/contact.html";

      });

      form.reset();

    } else {

      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Pesan gagal dikirim'
      });

    }

  } catch (error) {

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Tidak bisa terhubung ke server'
    });

  }

  btn.disabled = false;

});