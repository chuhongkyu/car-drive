import { useEffect, useState } from "react"
import { db } from "@/app/utils/firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import useLocalSotre from "@/app/utils/localStore";

export default function ListData({userId}:{userId:string}){
    const [load, setLoad] = useState(null)
    const { setSaveData } = useLocalSotre()

    const getData = async(user: string) => {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const data = JSON.parse(JSON.stringify(docSnap.data()));
            setLoad(data)
            // console.log(data)
        }else{
            console.log("처음 로그인")
        }
    }

    useEffect(()=>{
        getData(userId)
    },[userId])

    useEffect(()=>{
        if(load){
            setSaveData(load)
        }
    },[load])
        
    return(
        <>
        </>
    )
}