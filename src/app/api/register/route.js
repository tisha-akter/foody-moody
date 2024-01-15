import { User } from "@/models/User";
import { connectDB } from "@/utils/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();

    connectDB();

    const pass = body.password;

    if (!pass?.length || pass.length < 5) {
      throw new Error('Password must be at least 5 characters');
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);

    const createdUser = await User.create(body);

    return new Response({ body: createdUser, status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response({ body: { error: error.message }, status: 400 });
  }
}
