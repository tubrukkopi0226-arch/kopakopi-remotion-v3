# Render KOPAKOPI melalui GitHub Actions

1. Buat repository baru di GitHub (misalnya `kopakopi-remotion`).
2. Upload seluruh isi folder project ini ke repository, termasuk folder `.github/workflows`.
3. Buka tab **Actions** di repository.
4. Pilih workflow **Render KOPAKOPI Video**.
5. Klik **Run workflow** lalu konfirmasi **Run workflow**.
6. Tunggu job selesai dengan status hijau **Success**.
7. Buka hasil run tersebut, cari bagian **Artifacts**, lalu unduh `kopakopi-product-mp4`.
8. Ekstrak ZIP artifact untuk mendapatkan `kopakopi-product.mp4`.

Workflow berjalan di GitHub Actions dan tidak memerlukan instalasi Node.js di laptop.
