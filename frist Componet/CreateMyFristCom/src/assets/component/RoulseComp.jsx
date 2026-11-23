function ReactRulePic() {
  return (
    <img className="w-60 h-80" src="ruels.png" alt="React Reuls Picture" />
  );
}
export default function RoulseComp() {
  return (
    <div>
      <div>
        <h1 className="text-[#2196F3] font-medium ">
          React Cheat Sheet: Full Guide{" "}
        </h1>
        <p className="text-[8px]">
          Let's see all the concepts one by one in steps:
        </p>
      </div>

      <ReactRulePic />
    </div>
  );
}
