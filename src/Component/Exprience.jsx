import React from "react";
import { FiUsers } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { ImHappy } from "react-icons/im";

const Exprience = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-semibold mb-2 uppercase tracking-widest text-rose-800 my-4">
        Exprience....
      </p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title="Years Of Excellence" subtitle="25+" Icon={FaCalendarAlt} />
        <Card title="Menu Options" subtitle="250+" Icon={MdMenuBook} />
        <Card title="Staff" subtitle="340" Icon={FiUsers} />
        <Card title="Happy Foodies" subtitle="125K" Icon={ImHappy} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon }) => {
  return (
    <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-800 to-rose-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#ffffffbd] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-rose-800 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-[#222222] font-extrabold text-2xl group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default Exprience;
