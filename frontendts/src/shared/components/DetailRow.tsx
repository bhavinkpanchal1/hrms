type  DetailRowProps = {
  label: string;
  value: string| number;
};

function DetailRow({label, value}:DetailRowProps) {
  return ( 
    <div className="grid grid-cols-2 gap-4 border-b border-gray-100 py-4">
      <p className="text-sm font-medium text-gray-500">
        {label}
      </p>
      <p className="text-sm text-gray-900">
        {value}
      </p>
    </div>
   );
}

export default DetailRow;