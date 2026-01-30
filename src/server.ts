import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 5000
async function main() {
    try {
        await prisma.$connect(); {
            console.log("connected to database");

            app.listen(PORT, () => {
                console.log(`SERVER IS RUNNING ON${PORT}`);
            })
        }
    } catch (error) {
        console.error("An error occurred", error);
        await prisma.$disconnect()
        process.exit(1)
    }
}

main()