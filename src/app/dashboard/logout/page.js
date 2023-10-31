'use client'
import { useRouter } from "next/navigation";
export default function page  () {
  const router = useRouter();
  localStorage.removeItem('user');
router.push('/')

}