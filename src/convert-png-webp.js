// convert-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";     // your image folder
const outputDir = "./src/assets/webp"; // or 'avif' if you prefer

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to process images
async function convertImages() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const name = path.basename(file, ext);

        // Only process PNG or JPG
        if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
            const inputPath = path.join(inputDir, file);
            const webpPath = path.join(outputDir, `${name}.webp`);
            //const avifPath = path.join(outputDir, `${name}.avif`);

            try {
                // Convert to WebP
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(webpPath);

                // Convert to AVIF (optional)
                // await sharp(inputPath)
                //   .avif({ quality: 60 })
                //   .toFile(avifPath);

                console.log(`Converted: ${file}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }

    console.log("Conversion complete!");
}

convertImages();