export default function BalanceType({ type, value, color }) {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{value}</dt>
      <dd
        className={`order-first text-xl font-semibold tracking-tight ${
          color || "text-gray-700"
        } sm:text-3xl`}
      >
        BDT {type}
      </dd>
    </div>
  );
}
