'use client'
import {HeaderContext} from "@/app/components/HeaderContext";
import {CountContextComponent} from "@/app/context/ContextContainer";
import {BodyContext} from "@/app/components/BodyContext";

const Page=()=>{
  return(
      <CountContextComponent>
          <HeaderContext/>
          <BodyContext/>
      </CountContextComponent>
  )
}

export default Page;