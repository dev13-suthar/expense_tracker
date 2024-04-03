import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { UserType } from '../../state';
import { RootState } from '../../state/rootReducer';
import { ResponsivePie } from '@nivo/pie';

type DataType = {
  id:string
  label:string,
  count:number
}


const StatisTics = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const user:UserType  = useSelector((state:RootState)=>state.global.user);
  useEffect(()=>{
    const getStats = async()=>{
      setisLoading(true);
      try {
        const res= await fetch(`https://expensetrack-api.onrender.com/stats/pieStats/${user?._id}`,{
          method:"GET"
        });
        const dataa = await res.json();
        // console.log(data)
        setdata(dataa);
        setisLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    getStats();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const colors = [
    "red","gree","blue","purple"
  ];
  const formattedData = data.map((item:DataType,i)=>{
    return{
      id:item.label,
      label:item.label,
      value:item.count,
      color:colors[i]
    }
  })
  if(isLoading) {
    return "Loadinggg.Waittttt"
  }


  return (
    <div className='p-3 flex justify-center items-center relative h-[500px] flex-col'>
      <h1 className='text-white mt-6 text-3xl'>Your Spend Statistics</h1>
      <ResponsivePie
        data={formattedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel2' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextOffset={0}
        arcLinkLabelsTextColor="#f4e2e2"
        arcLinkLabelsOffset={-21}
        arcLinkLabelsDiagonalLength={36}
        arcLinkLabelsStraightLength={8}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsRadiusOffset={0.55}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                itemTextColor:"white",
                direction: 'row',
                justify: false,
                translateX: -2,
                translateY: 70,
                itemWidth: 95,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 23,
                itemDirection: 'left-to-right'
            }
        ]}
    />
</div>

  )
}

export default StatisTics

{/* <ResponsivePie
        data={formattedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#dbcbcb"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    /> */}