import React, {Fragment} from "react";
import { Tab } from '@headlessui/react'
import Review from './Review';
import Episode from './Episode';

export function TabEp() {
  return <Tab.Group>
                <div className="line-gradient">
                <Tab.List className="max-w-4xl margin-center flex space-x-4 md:pl-32">
                    <Tab as={Fragment}>
                        {({
            selected
          }) => <button className={selected ? "w-48 p-4 border border-transparent border-b-red-600 text-red-600 bg-[#191919]" : " w-48 p-4 border-b-transparent text-white"}>
                                 Description
                            </button>}
                       
                    </Tab>
                    <Tab as={Fragment}>
                        {({
            selected
          }) => <button className={selected ? " w-48 p-4 border border-transparent border-b-red-600 text-red-600 bg-[#191919]" : " w-48 p-4 border-b-transparent text-white"}>
                                 Rate & View
                            </button>}
                       
                    </Tab>
                    <Tab as={Fragment}>
                        {({
            selected
          }) => <button className={selected ? " w-48 p-4 border border-transparent border-b-red-600 text-red-600 bg-[#191919]" : " w-48 p-4 border-b-transparent text-white"}>
                                 Source
                            </button>}
                       
                    </Tab>
                </Tab.List>
                </div>
               
                <Tab.Panels className=" max-w-6xl margin-center mt-10 flex md:justify-around p-4">
                    <Tab.Panel>
                        <h1>
                        Bộ phim Cổ trang tình cảm lãng mạn, 
                        Thả Thí Thiên Hạ (Tranh Thiên Hạ) lấy bối cảnh vô định, trong một quá khứ không có thật. 
                        Thời điểm các quốc gia đấu tranh để tranh giành thiên hạ, vì lý do này mà Bạch Phong Tịch quyết định chinh phục 
                        giang hồ và lấy lại thăng bằng cho thiên hạ. 
                        Cô là người được đồn đoán sẽ thay đổi số mệnh của các quốc gia đang chém giết nhau te tua.
                        </h1>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Review />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Episode />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>;
}
  