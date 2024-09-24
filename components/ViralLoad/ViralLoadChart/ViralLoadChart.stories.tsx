import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import ViralLoadChart from "./ViralLoadChart";
import { computeCampusData } from "@utils/viral";
import { 
    ViralLoadData,
    ViralLoadManholeData
} from "@constants";

const storyExport = {
  title: "ViralLoadChart",
  component: ViralLoadChart,
};
export default storyExport;

const Template: Story<ComponentProps<typeof ViralLoadChart>> = (args) => (
  <ViralLoadChart {...args} />
);

const getViralLoadData = (jsonData: any): ViralLoadData => {
    var viralLoadData = new ViralLoadData();
    
    for (let i = 0; i < jsonData.data.getQpcrViralLoads.length; i++) {
      var viralLoadObj = jsonData.data.getQpcrViralLoads[i];
      var viralLoadDate = viralLoadObj.date.slice(0, 10);
  
      if (!viralLoadData.has(viralLoadDate)) {
        viralLoadData.set(viralLoadDate, new ViralLoadManholeData());
      }
      // assume manhole IDs are unique for each date
      viralLoadData.get(viralLoadDate)!.set(viralLoadObj.manholeID, viralLoadObj.viralLoad);
    }
  
    return viralLoadData;
  }

export const Default = Template.bind({});
Default.args = {
    isBuildingData: false,
    viralLoadData: computeCampusData(getViralLoadData(
        {
            "data": {
              "getQpcrViralLoads": [
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 123872231.72790627
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1475513.1333727944
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 3120887.3426992283
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 912543.3400952037
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 1684034.1874879524
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 740330.6033900611
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 341676.7269093842
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 384252.88617010775
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 116593.12518939209
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 23817.59623004848
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 367733.12721228565
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 166273.3405140691
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 39051182.84115196
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 177154.1545139841
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 669046.0014817064
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 3321626.6306710155
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 6479963.758616324
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 569147.5273118344
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 57650.60194021911
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 795502.469229335
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 1410557.2543365562
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 115570.0108743257
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 147272.53057527612
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1716253.2502516718
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 1193906.4933350238
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 10267447.128082076
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 221574.52746307084
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 3683496.6501347534
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 827861.5356556808
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 540832.8962674515
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 13651669.45201964
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 11677.795063976317
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 6190.619780355204
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "SC0475",
                  "viralLoad": 10844521.054955622
                },
                {
                  "date": "2023-02-21T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 2294590.729754563
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 892174.7304286036
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1699830.281238887
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 4638081.314860516
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 11499789.279198784
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 11316853.191009313
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 711285.5801198143
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 2303670.9937834884
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 587792.5687664173
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 904981.9972731757
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 10672280.135195732
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 45670.49409807621
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 298470.91709242197
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 689949.3009812501
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 1046133.610076977
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 1571980.4271515592
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 12196.11067489326
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 7506329.418373924
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1439784.9532955198
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 119575.18647741583
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 4164404.6938929246
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 2175361.922950596
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 2828907.995969819
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 12317969.603103673
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 479723.9900399616
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 482163.958641435
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 43707.337391837136
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 434792.1987567596
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 383350.4273562362
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 11865457.80921031
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "SC0010",
                  "viralLoad": 434055.45749197743
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "SC0023",
                  "viralLoad": 107678.3201221264
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "SC0154",
                  "viralLoad": 1304545.5180025492
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "SC0760",
                  "viralLoad": 25576880.30009561
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "SC0805",
                  "viralLoad": 83252.22649699732
                },
                {
                  "date": "2023-02-22T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 117504.8078491952
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 23821334.26184965
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1889147.858647469
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 287270.9338921922
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 115564.24288335287
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1646780.932764462
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 9824435.310526924
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 493969.0359151468
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 805484.967309343
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 180321.3739242267
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 14505503.25627709
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 1457673.7281854593
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 7861358.727727702
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 15508829.342147175
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 27351959.710910317
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C4M023",
                  "viralLoad": 2242660.0869498085
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 422022.7742521267
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1448095.883462406
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 26274.178610098905
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 2785632.456828079
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 15815796.581145449
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 248158.99907785488
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 463612.4064524187
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 583121.8715397462
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 1099490.72102432
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1181845.4561038068
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1908729.3649931864
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 368421.67892459495
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 2437703.9347130884
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1726304.727808918
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 13074732.006724928
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 6334576.884258494
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 1027186.8948994438
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 333303.8342224844
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 29939167.483429953
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "SC0010",
                  "viralLoad": 3328405.5616271636
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "SC0154",
                  "viralLoad": 10663963.890285367
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 212551093.51881078
                },
                {
                  "date": "2023-02-23T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 3727291.4821271715
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1540278.0495557406
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 456207.02348942315
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1729056.3562680753
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 82273378.79593061
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 614406.770029883
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 54810.94918403473
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 25603781.772254758
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 374747.29537449
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 1574846.0485830645
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 12045773.053955449
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1420815.5173308325
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 771293.6219336865
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 272132.6627833002
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 9496813.82772631
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 149459.0567300721
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 245095.73267333064
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "SC0475",
                  "viralLoad": 86133813.35095643
                },
                {
                  "date": "2023-02-24T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 9577181.477197196
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 68884.69989676889
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 2911162.90123417
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1082255.6734740525
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 50117010.95842566
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 17333620.75924295
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 392575.9454509834
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 765133.8154641411
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 706402.3841140537
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 18322142.42908545
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 53692.33560418673
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 908011.746697175
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 3096492.3938765433
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 23592349.509506
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 1309752.5789099678
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1124374.5993835833
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 387164.4918605227
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 1765608.9255110656
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 47127.967161066925
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 162283.62364222837
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 3190743.0262431246
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1369150.0478165168
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 375829.9515605996
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 1573349.8947661042
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 807331.9894357632
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 2159324.0194023484
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 2576905.3482212913
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 2635144.8760038596
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "S1M046",
                  "viralLoad": 17937576.802659146
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 1124138.8191055707
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "SC0010",
                  "viralLoad": 351529.59235113126
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "SC0154",
                  "viralLoad": 24842245.444413435
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "SC0475",
                  "viralLoad": 25529061.3129861
                },
                {
                  "date": "2023-02-27T00:00:00Z",
                  "manholeID": "SMISC-014",
                  "viralLoad": 57389.01781668359
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 526456.8934945947
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 345432.9422964357
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 151834.30273396097
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 5044426.844162614
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 216198.53573422492
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 316157.77480338694
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 7827827.707478696
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 372496.9427833366
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 209138.53215138824
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 8837057.85764883
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 718067.3601310808
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 366007.5580579823
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 391685.43844350445
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 9868354.90250303
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 894990.4842411281
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 5032488.579300166
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 2648459.782604012
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 181415.00573740544
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 101273.27234296346
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 3897944.0425617755
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 3528410.612995361
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 2861924.3246311476
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 294090.3424829844
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 3933284.625856432
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 858145.0099689824
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 29138732.47467872
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "SC0475",
                  "viralLoad": 761089.5596004368
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "SMISC-014",
                  "viralLoad": 128465.4164089241
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 9281306.371082751
                },
                {
                  "date": "2023-02-28T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 646829.2838872782
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 784358.882444858
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1229513.09096889
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 3816192.2465747516
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 117354.56243991996
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 143238.57682864225
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 1517099.0113317922
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 305990.89703059907
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 794583.6764807567
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 3947603.447243423
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 1693460.5549659438
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 734639.0738757761
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 23670026.51498222
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 303226500.96774155
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1136008.9124011837
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 3620602.7393906554
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 743699.0582277832
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 54459540.41498681
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 327871.6620290269
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 410623.55216000375
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 555604.0814390527
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 1014565.6591851593
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 8778925.928099861
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "SC0475",
                  "viralLoad": 192318.32626909958
                },
                {
                  "date": "2023-03-01T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 55974705.67909655
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 1825601.7464702686
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 278431.13038955734
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 2042377.7469767958
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1830366.1003182787
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 33867578.84216945
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 2512687.235236023
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 118487.90421582274
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 23818.641240759058
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 208416557.91051844
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 946830.9801504682
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1647659.1031824679
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1060426.8378412472
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 86158909.6556372
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 1093433.137912998
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 19708215.084556527
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 58034606.625168286
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 800686.2486136418
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 2830530.1559160827
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 377210.271545429
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1244728.9872554697
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 244290.07097835792
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 4414804.337628204
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 265644.18563436955
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 91274.04356077626
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1371207.0717645402
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 17560827.45473325
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 124814.43565130385
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 8462178.613448916
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 7699581.475106969
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "SC0760",
                  "viralLoad": 1559473.1248106607
                },
                {
                  "date": "2023-03-02T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 23755020.360997457
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 740224.1778353645
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 96692.62554538785
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 2174451.9586738055
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 43008.17575809071
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 554356.6339894639
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1509788.545037578
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 503671.1335288427
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 459755.539222253
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 3866076.8261279636
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 5030888.463327847
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 66332.59980403824
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 384111.7717079852
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 8742913.642591914
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 25862287.169214997
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 695418.8072270902
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 3975551.1496859184
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1312323.862428083
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 352168.3824586837
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 2878131.459401911
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 645754.5167709744
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 516772.49763185804
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 681152.725011396
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1536181.3602349218
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1491003.4350784903
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 993729.9820021541
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 2463349.3069125335
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 3209961.685000085
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 879407.1617729549
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "S1M007",
                  "viralLoad": 32583685.6591581
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 996436.83577242
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 365892.2671755131
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 929262.0230591659
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "SC0475",
                  "viralLoad": 1381412.8009735136
                },
                {
                  "date": "2023-03-03T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1252418.0331092863
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1908572.59847654
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 474463.3459328311
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1412639.863149632
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 47646362.10823335
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 165778.85789849996
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 11042685.864793712
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 682650.100283343
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 2607102.4879359943
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 10091529.071056914
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 1283650.486663844
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 1834381.7221251142
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 18887493.755070377
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 162068.3379252173
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 35148765.60323574
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 8261805.389813232
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 21320.012410801373
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 169017.61665048113
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 745889.7163610375
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 516731.39490084007
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 324808.5808805414
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 992882.2545462677
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 2345958.835895899
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 61036.30549265999
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2165190.1952064643
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1840203.2765849857
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 639036603.5826998
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 2641540.8901959136
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 742001.6494732704
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 6442749.563391056
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 130922896.62553336
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 23141056.066783056
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 733445.7697117052
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 6345506.056622615
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "SC0475",
                  "viralLoad": 2328449.298958905
                },
                {
                  "date": "2023-03-06T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 825743.9958552093
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 613642.9671042403
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 15238914.418890515
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 12677844.68956789
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 1217559.31744759
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 40215285.883143246
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 796492.476070311
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 213945.6827836284
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 124545.90599379058
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 265272.75555860845
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 319648.6104167697
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 285509.8442654488
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 51874422.69268932
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 291364.3553149445
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 3504653.5572470687
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 20855.16840450974
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 408763.8288383402
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 43421.279829012885
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 17267540.717517026
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 8031746.899393699
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 2089158.3224742755
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1034931.0221368711
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 460921.3042810307
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 974234.7198529699
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 1500910.7678082285
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 501141.75362775207
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 695985.2144731178
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 3005645.624249828
                },
                {
                  "date": "2023-03-07T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1546943.8870896818
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 6996580.785743765
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 2803773.023614558
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 937621.3871427041
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1573235.883295237
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1857857.3392749005
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 32931396.301564578
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 45494606.33364498
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 12491957.085461155
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 491623.6011662193
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 29188292.84377984
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 2006032.4322744943
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 317441.9135513483
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 204953.19574489788
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 3218900.9233136103
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 66059.9785994237
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 4841594.788305561
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 429678.4440312959
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 206484.08922592876
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 5181028.885949873
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 21567798.097912442
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 920474.0582169552
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 245538.6379502871
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1435764.406971943
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 19179581.155831516
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 47871135.26851787
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 6854582.154370649
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 2870303.334611299
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 14257855.251193676
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1943274.9697878798
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1146296.1578423132
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "S1M046",
                  "viralLoad": 289121.46648814646
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 271332.6210441266
                },
                {
                  "date": "2023-03-08T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 8517598.625602722
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 7250036.318756772
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 5357758.584545194
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 4872871.341451865
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1863920.5335437497
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 836277.7072472989
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 427873.7542951443
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 3261204.564153819
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 292690.7372765532
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 8207911.680633484
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 290204.0964494343
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 39803.794987333815
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 359999.2714559354
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 80248.97883766015
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 302772.54464259464
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 6600554.568280372
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 45304519.31952357
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 404324775.66660076
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 68151184.49815974
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 454499824.8748112
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 13141461.809213083
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 1835880.9510587356
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 2113129.104894796
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 3623880.333754139
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 26950347.680709146
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 311420.497958429
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 2465310.1697431626
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 3469613.751971818
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 4800796.387076563
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 380068116.6829005
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 5216933.746091496
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 365267.21545976686
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 970102.5951998164
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 201707.33906364025
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 88035393.65193099
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1518360.801709641
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 584509.3908957848
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 5898727.416727729
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 1738624.4755811952
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 4350770.439487779
                },
                {
                  "date": "2023-03-09T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 806978.6525975099
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 113772.20094838261
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 3122768.8422052916
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1565772.2829092036
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 11563295.531604804
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 3592547.4020250146
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 201966.16692721087
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 2062473.5665041073
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 1959820.1195568657
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 23586095.147217665
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1704181.926090783
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 3221973.499801543
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 430355.2281182276
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 821584.0243265603
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 391343.47125733155
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 114663.24961079766
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 288733.925883374
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 349845.39244105027
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 98715088.2063258
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 93004918.9027312
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 18228137.878502615
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 72403462.94970027
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 2470029.7069988763
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 9102329.899853563
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 279330.11323198956
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1569837.2052990715
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 3905860.2336388947
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 288487.6114553924
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 216478.91627554465
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 586015.0157620256
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1062324.9412096508
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1710902.6236366187
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 7908442.339526597
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 214479.33736594234
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 27045716.84782506
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 10705027.791795773
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 191667.68567323385
                },
                {
                  "date": "2023-03-10T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 796541.9672047442
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 257021.31553274806
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 594598.7486731152
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 559197.1018939761
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 28859959.551634047
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1956470.7193560414
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 4848553.394584694
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 13127958.738692116
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 279765.0309369579
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 195083.35263342704
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1553509.5179072553
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 124942.10964587676
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 138938.53369642692
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 498243.585691027
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 819345.6155461522
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 74996670.02589604
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 983449.6623144061
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 2288527.792267827
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 36792681.944471836
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 4401531.341721784
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1696143.3772550859
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 2354367.3410395957
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 875827.8481054275
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 77227.40580825509
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 2770818.3180457223
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 16071970.870099349
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 2270755.9961456843
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 3735867.8200840554
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 1178844.1548187197
                },
                {
                  "date": "2023-03-13T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 7116563.5615432
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 215376.03713575675
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 2287043.246543691
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 3656528.77037779
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 383118.5409054317
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 114849.1728648067
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 4035179.8429773236
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 243626.5036401151
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 8406521.178549852
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 11919037.06109903
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1732071.3884144507
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 183401.35501754817
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 2441318.107331842
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 261870.64261641775
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 36218193.45015245
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 153408620.7878867
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 358802.4996545235
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 2867897.215052238
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 526562.9116329895
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 559919.2176360317
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 684759.4121567053
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1859918.2399448978
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 1035066.7566805785
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 909466.31551222
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 2107005.726260641
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 311150.33493819274
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 882605.8754697224
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 1850608.6138100454
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 1003674.4128216985
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 564150.424241986
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 529120.2534990178
                },
                {
                  "date": "2023-03-14T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 223818114.71733466
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1353437.1367172117
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 916900.8710613457
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 524294.3473344039
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 579373.4042485532
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 217872.481366079
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 989642.1349164164
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 12092725.075228631
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 629220.2521583183
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 3031994.339384858
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 4193809.405731411
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 45135168.180750765
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 640761.5557619305
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 15287151.674860988
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 5087478.903380666
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 3072395.7093155556
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 1255343.491170438
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 1138657.0881039922
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 241026.46328886575
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1108087.9173104737
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 8951024.806797152
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 442522.3689424987
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 148378.2109674906
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 436255.66896042455
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 635033.0069128323
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 26585037.519835074
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1566053.8827141568
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 325279.7911507271
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 68256321.40774718
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 8911189.953799926
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 18611252.355533414
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 6941285.120097878
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 168840.19646192706
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1691532.4782061363
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 498843.0909516151
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 257802.03137358086
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 420220.1589712
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "SC0322",
                  "viralLoad": 556655.1009590268
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 56647775.235437475
                },
                {
                  "date": "2023-03-15T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 3500439.204993474
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 7086036.756973108
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 679538.1393050147
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 36137.98534071671
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 42855568.530239195
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 2255624.9841448236
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 6352794.723423351
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 431147.22513129405
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 29464185.581554893
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 5788797.488199083
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 5522391.977216778
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 68694315.38281177
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 3687212.156151013
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 61287735.538051955
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 2047894.718679647
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 3710302.139466074
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 1769149.7051026907
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 67081.07690186104
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M146",
                  "viralLoad": 2602546.433507906
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 12744250.62641501
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 235623.97455434568
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 2256639.4343872066
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1500500.5502726184
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 39804615.96423494
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 3101153.9446128337
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 301108.82304463943
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 8020618.121498482
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 104756.11459621749
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 20088750.075700466
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 9454820.347833507
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1852067.5808963054
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 4133375.4143945305
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 14552798.254065832
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 7419411.414551547
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1268849.1284140784
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1612732.2885540435
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 35095438.32746441
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 173637.11614484087
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 740998.7921427372
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 139937.12563227798
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 8780936.052542409
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 39168501.84233107
                },
                {
                  "date": "2023-03-16T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 2174106.7630541534
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 684481.0131910229
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 274164.7837095015
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 3252073.849430602
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 81228.7717144328
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 582994.8966599636
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 19428722.80904433
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 76705123.46859105
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1160304.3326805267
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 7685143.526017462
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1966843.2671056818
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 128993.87645073536
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 432614.26797352405
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 325375.5409596464
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 174456.8956230985
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 4835372.4758786755
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 10213827.900630482
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 286232.83973532735
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 460283561.23189896
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 220633567.27435857
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1746233.8816245145
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 12355468.169300282
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 37257.863179120715
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 236230.9504545916
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1293020.0857244332
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 543207.9788993008
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 11741004.26723634
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 321446.55549497966
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 2111051.186344059
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 713508.3686585422
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 8015100.725797695
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 3679878.6169695077
                },
                {
                  "date": "2023-03-17T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 17009287.595842496
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 3633841.822728855
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 389344.602926429
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1398008.1163460037
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 4473294.907138787
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 9293599.455208413
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 3741407.269603314
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 2347660.6118763164
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 731123.8780074085
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 3907857.733508083
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 423175.2690689687
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 7920652.928250098
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 9769234.565532928
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 139202.13448696255
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 3450383.75618123
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 3710200.08897739
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1289567.4082910742
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 187917.43081669527
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 16202601.107563196
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 86907496.2355528
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 2880995.758726701
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1067547.5055914943
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 8382314.189644503
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1624857.1909375768
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 10130795.392350206
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1471575.1277478244
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1339465.2068990087
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 548120.7690796219
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 3302386.148004907
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 72520542.90528211
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 2340172.063937277
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1348887.6455805202
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "S1M045",
                  "viralLoad": 40416.78250939476
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 818715.8579480537
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 3334290.241378029
                },
                {
                  "date": "2023-03-20T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1604112.8232370247
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 152927.987303636
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 36103417.97978802
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 103516.48364096442
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1256604.5721779715
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 252830.6087611458
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 52635793.63400276
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 839754.7400252547
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1620351.6427208555
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 16928596.41955224
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 200180.4645044633
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 510226.934981932
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1380940.9261713102
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 7775639.076451036
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 235735.6926541718
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 571238.5297360074
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 452847.6965445426
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 221502.95120098043
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1370319.8864891916
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 138237.07318667398
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 4625678.604786433
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1954461.2518939818
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 609646.7791736269
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 16927877.35571092
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 471209.9537233867
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 2198003.504175319
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 245116.30583656413
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 990885055.5607082
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 978915.0381056243
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 15696472.706509583
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 13759837.24098369
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 15017368.725576919
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 5845472.602175196
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 3141925.970785449
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 378545.0535146477
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 298666556.80878085
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 176690.6859904061
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 190161.97129618644
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1509921.8262097952
                },
                {
                  "date": "2023-03-21T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 4110462.26015104
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 763687.8383955349
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 88160402.96751326
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 124476592.65532953
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 440753.1639976628
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 107656.55331106126
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 40077.10978841524
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 414353.7332821376
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 290952.25493141724
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 125048158.99502236
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 561039.7749676055
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 1445870.6579718872
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 103873.6909997384
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 496955.6714329146
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 287225.81542935764
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 200896.15346247403
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 467384.30881653214
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 781628.9428930127
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 2065745.6811055187
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 5888890.129504367
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 95980.89004457481
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 635887.2045603679
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 238880.68147149295
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 2352636.844795467
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 540997.4453862496
                },
                {
                  "date": "2023-03-22T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 12405576.13879896
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 42407.777272946696
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 318416.70185612194
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 853332.1378386806
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 514000.07665026875
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 787301.9419450056
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 102331.75677851704
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 56775090.6829111
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 510111.60576328955
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 185401.58809697148
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 352271.6891313333
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 691674.1555707693
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 10321879.548862651
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 7886574.681669219
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 338952.7961369488
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1084004.3720970212
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 49603545.57676734
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 132158.41841729288
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 174624.04027272228
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 987179.4566611329
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 615487.8976165557
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 17462691.498346787
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 13632904.471482847
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 10083569.538701389
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1740469.14314077
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 473956.9070515939
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 2629324.412202216
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 508906.29998814856
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 4197769.1383507075
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 3044586.6949536917
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 3180626.609175091
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 53551421.97598185
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 13940330.702104682
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 203434.71127142603
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 631322.2383031527
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 31324353.85906093
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 2071875.4619153365
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 4230335.368720997
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 383236.61780929356
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 131376680.56030251
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 7270655.941109691
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 600694.4304766242
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 129025850.92594868
                },
                {
                  "date": "2023-03-23T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 5753343.183672685
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 153983.97427001307
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 144902.1283735478
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 89177.38374087568
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 18674174.095766384
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 621313.9141156992
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 190312.4047723149
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 2047438.1329633475
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 258555.7387180271
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 599312.3314989483
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 72753.34681953366
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 27594183.217642356
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 149590.28875501626
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 1390581.0820619157
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 936648.1204655954
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1468409.2776158846
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 861465.43423321
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 1485358.67848505
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 231229.072152052
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 4597002.089348651
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 924995.7358523866
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 15005467.809819356
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 2291785.7904033964
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 70918103.39883395
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 8957076.23526385
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 31031765.683114138
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 150946.22841745373
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 100595838.76343851
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 831865.1830258036
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "S1M045",
                  "viralLoad": 47363.42101568623
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 17460227.72437385
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 131784668.69876629
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 24728795.78746549
                },
                {
                  "date": "2023-03-24T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 2467139.6139223794
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 148983.28463573466
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 438743.4440786711
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 8148614.363930796
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 506395.720568363
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 9212001.121987354
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 5215071.787057875
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 41249.891280363234
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 1545004.9078784685
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 865846.2966864108
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 470938.16424760636
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 3050316.818839386
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 645931.5778944342
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1178769.3525477666
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 318626.03751982475
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 172770.43698591995
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1406547.576946369
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 438199.0249122723
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 134990.1314525563
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 4909440.842294655
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 58639416.09748239
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 248197.4209241021
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 9448917.583612448
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 192852.1713175478
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 521145.5729339646
                },
                {
                  "date": "2023-03-27T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 5487861.738271344
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 376276.66874564486
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 496128.16664813436
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 859261.6034411859
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 440095.84324511985
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 379573.7760215246
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 180937.40806220158
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 736751.240165524
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1268224.9204605878
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 5349957.136299814
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1438336.6209352918
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 242627.54019234283
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 230489.80878698404
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 341255.4687895447
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 495242.9174395324
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 1471958.4116764073
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 416378.47444922297
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 917639.1295763124
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 456334.9090067717
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 73626.4177223695
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 338051.0647195936
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 443959.6327751129
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 10107069.901139002
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 430445.2089616549
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 3846102.522240219
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 471259.09408987034
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 253764.86205540903
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 592065.5766159538
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 650078.5192261873
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 30394.69466661587
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 232150.29853535362
                },
                {
                  "date": "2023-03-28T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 480114.63996485044
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 475356.84510059014
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 687409.0075162689
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 934579.075726299
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 398957.95190338796
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 323240.79062460724
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 841149.883808912
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 282379.89001155866
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1052390.2410175323
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 419380.7403914624
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 736732.2670203865
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1077283.5574193404
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 143384.025176398
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 2190622.588667233
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 409785.3269042488
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 244935.66500988175
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 2310693.139895443
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 3060070.583720136
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 563579.1908519516
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 488167.2190960607
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 212024.46024925544
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 721745.2570641459
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 1453378.1290136834
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1254156.212144183
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 634177.1164352814
                },
                {
                  "date": "2023-03-29T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 400465.8798841778
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 1476686.1574531144
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 1139074.8748696449
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 301734.79823800846
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 1824521.7005852947
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 364351.39588549285
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 429381.22296428843
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 699060.8509210704
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 17263224.786498044
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 591592.868423882
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 659735.9752913585
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2266407.2794529377
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 896926.4222496949
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 367657.04870534193
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 438701.7364427225
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 2433003.211121765
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 32307479.093311638
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 10771552.566949107
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 9643876.504722973
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1275647.6229909703
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1040053.3829864598
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 558969.4370246046
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 562053.9461316307
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 145240.03724974534
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 557719.6443846675
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 64826.350208467935
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "SC0688",
                  "viralLoad": 359635.6958374394
                },
                {
                  "date": "2023-03-30T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 385211.3642328727
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1853948.9180582222
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 498813.65709655115
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 252393.18846851776
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1868785.567029902
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 7202658.7138549965
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1545112.4098752134
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 148473.74545468896
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 436794.98646533804
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1143827.7950049224
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 1348644.621553043
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 636869.0127979256
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 377588.7466624946
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 2347088.764975347
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 909505.6835592827
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 2107794.390498838
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 459082.7401867848
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 108455.9446422789
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 410251.72514160495
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 1172129.9102335242
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 4906658.954514624
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1278809.8831038845
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 3254554.79466578
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 114961685.02015476
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 3709506.8128889697
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 12161339.679836191
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 12189673.290565861
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 52044361.519419216
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 15966419.505868778
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 94324375.74756895
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 197434.86029440822
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 841029.5606192102
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 2304665.2429226264
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "SC0688",
                  "viralLoad": 792405.0402495362
                },
                {
                  "date": "2023-04-03T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1529824.9736943
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1639128.2566078173
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 4005765.4129305054
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 6605349.793073462
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 6530470.621236114
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1902939.0782514722
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 908729.4826046034
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 1949965.012696849
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 4279545.274533523
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 426568.89452017454
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 1473913.0987095328
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 1052786.6058110173
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 920751.134729214
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 1438106.5846675464
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 228373.87083412672
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 499503.177796098
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M159",
                  "viralLoad": 8338924.372428314
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 236434.5786444784
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 2777798.6248767064
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 198474.44069419385
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 2879273.89266702
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1721149.2999082182
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 7378694.016836123
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 5419769.793363899
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 4223937.754197807
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 40698847.55068832
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 408036.15986260184
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 6069615.772846103
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 3180796.850335386
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1415557.400169393
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 4396125.624661531
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1069331.6322068225
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 896912.5225353866
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 6575343.580249417
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 17230640.310568053
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 1834856.3493978311
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1361604.2337288354
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 15171158.125828268
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 826454.8244416455
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 2001079.4509476072
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 12352342.6164505
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 873148.1972468904
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 2554916.5544443717
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 2398758.501022851
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1107003.787836107
                },
                {
                  "date": "2023-04-04T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 122967.06811025197
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 359204.21644379315
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 8906107.077151759
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1020741.0280017732
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 382663.71303330734
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1312836.6080562512
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 12902155.22677471
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 26939311.27961833
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 2088885.4973857482
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 462101.52899672237
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 218968.4620842432
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 595506.6067819551
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 372015.2715121791
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 1422258.7844747966
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 464335.43285857403
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 1328960.053897665
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 870032.4709592034
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M159",
                  "viralLoad": 35318556.82113295
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 2989806.260112711
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 423746.98903047113
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 876670.9575727917
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 31131319.92827042
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 26209008.59373537
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 1075006.3687504842
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 775695.5465906145
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 946970.3206636751
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 4654249.744687162
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 5447980.960585533
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 4245357.389407364
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 857934.3607100147
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 651318.5697088579
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 4197338.289723199
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 24587725.987880763
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 5949551.859092124
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 2459525.44270741
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 28577381.001566537
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 2185697.0961616384
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 883397.6229728013
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 5059256.647674342
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 4046563.4162500505
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 9312939.97512001
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 5354174.010246815
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 2946298.572218859
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 12937247.380466472
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 633118.2633731873
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 1659086.421566909
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 406231.1366430047
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 915299.2623106111
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 387711.23802372214
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 540805.366022167
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 41026832.30769547
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "SC0688",
                  "viralLoad": 1128976.9632682062
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1898118.1895582809
                },
                {
                  "date": "2023-04-05T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 7612536.783365988
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 830688.74036692
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 4552694.432124474
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1410391.7636591857
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1401133.8447508994
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 854077.5507047558
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 4723404.744790756
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 52467692.36709274
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 466173.6534776699
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 182476.91650935207
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 333229.89756285044
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 5467209.9299063245
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 787404.3641590651
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 744613.9350001183
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 522710.850126817
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 13816632.128100922
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 309715.26063625765
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 215665.3972355428
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 234743.76778326998
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 1180398.4940865499
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 815943.1170531155
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1155505.630158642
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 231247.13335752438
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 7439741.079710028
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 5750888.731996307
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1455440.6564050338
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 2182138.1573614283
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 698588.1607044678
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 21928399.871686146
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 822399.7461522913
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 418073.0587239204
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 22441859.953550976
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1081772.7189480818
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 16695908.456875293
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 226414.21776437882
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 27103695.200193275
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 5617964.346308523
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 773371.9236905029
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 821486.845304829
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 302901.71156243
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1111767.1360239189
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 269062.14255800244
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 506495.32345481624
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 630526.5197268716
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 2659691.940572207
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 36278.58535929472
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 986329.1051986385
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 547239.9955631661
                },
                {
                  "date": "2023-04-06T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 785546.2523035721
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 1193970.071465433
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 739572.0524789323
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 3662649.5157757658
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 386703.62127725774
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1340679.6579008002
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 846441.7950445152
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 11234677.707350472
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 49731512.66485508
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 360148.114691383
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1288992.9678121624
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 750205.4084053199
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 395497.8172429456
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 226871.16516079954
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 369392.59554619325
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 514897.719639757
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 774049.6987617462
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 346118.6108503577
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 505137.6943866344
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 491287.8327359513
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 26400.63714960006
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 323828.8741460847
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 765027.9453585292
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 142868.99786606958
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 295735.31229301053
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 565759.0289024028
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1518326.6971846148
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 110969.67764397092
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1531882.3822794943
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1868268.365306747
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 707204.5320874075
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 527342.1827438994
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 346397.47465784685
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 1953471.4270922632
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1739912.5553770016
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1306945.997685888
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1216543.7446500864
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 324743.88975898956
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 673082.946433141
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 244914.7693604538
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 906899.1379423947
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 272122.94283390476
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 4514963.875302994
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 2738976.833211397
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 658854.4120453292
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 826476.9069845024
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1167198.5895993714
                },
                {
                  "date": "2023-04-07T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 6456508.340276672
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 1350974.9918632112
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 241489.18596098898
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 224496.29625951513
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 121898.35261952157
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 2163829.763741862
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 763159.6097785345
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 932183.0136447472
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 473330.45505369327
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 8529674.355917258
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1144082.564216749
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 232992.52297527454
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 3826828.500274897
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 735705.8419503517
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 654977.7344317716
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1361735.7394036849
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 458732.3355641697
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 939995.5168755839
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 161368.50123159934
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1895673.3515655773
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1104592.734641043
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 852056.3253659017
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 901217.5403389524
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 947115.990744084
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 2154941.214492004
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 6936227.956338486
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 90617.44893570579
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 425603.56818585645
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 926533.2528469807
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 101112.1275149662
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 511853.31039180385
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 4373808.129984278
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 3654306.7883265377
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 674886.095180261
                },
                {
                  "date": "2023-04-10T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 27824311.890219558
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 56003067.99296439
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1925242.7949345377
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 249782.85409779157
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 326261.18643889675
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 228445.66566756368
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 1271211.710300752
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 1695056.0846391527
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 162960.97713520122
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 7821137.89489793
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 532662.6517506418
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 572039.010087775
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 749364.2166352199
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 1437492.8030935137
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 11225055.774476951
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 7039991.388540112
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 663121.9266894563
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 57183903.767961904
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 825403.6141788607
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 15747810.117035884
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1258260.0900054206
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 286641.5897031665
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 13602026.581096115
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 692087.6202106957
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 4233475.042146236
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1382284.7398937617
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1738498.7370792963
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1165250.964767312
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 126634.67983555261
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 166183.8018215051
                },
                {
                  "date": "2023-04-11T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1294444.458586362
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 397996.2647974013
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 369681.93157718517
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 201936.56217467788
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 30510.461144977628
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 766843.6297872181
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 9587308.628840476
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1315319.985698635
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 294091.5632780354
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 435032.1492949079
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 254830.85442779114
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 360058.12518874084
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 306526.1115885774
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 995397.6634427705
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 5012368.174682793
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 16723818.218222216
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 4310591.818017152
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 171390.84287006647
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 99875.08770751674
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 268757.6808511982
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 411001.51166260836
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 9937621.526125105
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 256556.94344578157
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 538076.1388294476
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 2179194.6699172086
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 341122.1847962135
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 4087441.348713917
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 5149452.919038059
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 827295.903177474
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 7464828.820996795
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 31060168.775654856
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 147805.35626175595
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 147348.5069952009
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 376099.26949475246
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 5495741.5614012
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 171377.24756105253
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 2382396.8714847886
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 127465.4206164428
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1785682.8860098629
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 652947.5485739303
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 4934985.298222556
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 762131.7366066055
                },
                {
                  "date": "2023-04-12T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 2590694.126735851
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 124190.03481355777
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 243760.61276196188
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 202843.73458717755
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 315536.36563879397
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 342928.95759986487
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 2416623.8124795193
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1342571.2389702508
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 770278.3965150964
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 331092.1097590786
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 653803.4306960229
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 942076.658956186
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 536433.855918581
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 637016.8244480924
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 415014.6752940717
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 2466074.165764861
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 625632.150296838
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 405908.2453606695
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 344271.9766137002
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 4326836.26197755
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 278354.0339747228
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 372182.24938468705
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 3311707.9067858434
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 187938.98357489542
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 724896.1317434618
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1128318.003568163
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 194889.45819775187
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 418207.98456123145
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1331475.0574320098
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 736296.4646562255
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 14753373.028877895
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 2981719.18397354
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 651189.7399595713
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 372043.21466019505
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 538254.9429947161
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1966869.6159534997
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 830574.6767054838
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 200248.56140968902
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 1567543.9204431653
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 12722686.824859135
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 5975658.53592266
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 430159.1487576484
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 245487.0288396077
                },
                {
                  "date": "2023-04-13T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1188441.763919152
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 176428.62802788222
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1121766.6543152486
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 194330.4534759537
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 361300.28476690815
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 5503170.902396653
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 404426.8901961974
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 332418.09302348125
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 1525535.3587927774
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 936528.3265659731
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 22114.124416558065
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 178908.47997515983
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1173741.6725336441
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 133203.7233503915
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 640288.8538491824
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 614373.2835475175
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 2094188.6050407102
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 1900500.0997915566
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 6122245.777237599
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 245503.81255506282
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 1903786.7537012373
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 102763.47938270263
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 631206.8379233648
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C4M010",
                  "viralLoad": 1192208.8957205517
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C4M023",
                  "viralLoad": 3409594.064409409
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 646016.7316056221
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 5836310.026010528
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 685014.919554631
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 2268132.9131710427
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 208780.58388219643
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1554764.3945093893
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1764192.0259076229
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 445729.6481764274
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 3231384.797307216
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 18166773.09807844
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 148737.36905495686
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 4893829.0215906175
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 14592539.333847228
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 323528.0000682231
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 449062.7614866569
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1692096.7857783458
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1622977.5658091619
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 4937339.006221327
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 2838641.081366413
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 2963474.615832988
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 482607.54637224163
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 664570.6434084683
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 119685.13251362003
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 226091.02810331443
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 10062274.031816721
                },
                {
                  "date": "2023-04-14T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 704648.6266975842
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1436092.7535886045
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 244523.12649753745
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 729661.4114013135
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 437268.6721591805
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 78758.32779886547
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 504669.57075085625
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 157426.9913028093
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 366948.8929120361
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 11094699.992753055
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1134844.788308449
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1715805.4504367677
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 20813342.08769612
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 5874679.843076464
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 373741.11497233657
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 291917.00209734176
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 937828.260666176
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 627483.5333852435
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 6421764.408040723
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 3726067.7656663894
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 4415524.36138387
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 195227.4296518375
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 545998.0242722109
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1850746.4182626116
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1573164.1553032908
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 223606.47414875557
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 227602.62956263332
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 672598.2901982117
                },
                {
                  "date": "2023-04-17T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 2464466.5128576676
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 271896.3115958713
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 9975722.917302765
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 2849515.072451235
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 425565.37172744825
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 65953.73187673214
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 157628.08255590286
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 203911.12739295472
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 557288.8272687484
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 431796.19535367365
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 211157.12557755428
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 1392394.150410995
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 171324.33114444485
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 870952.6557919495
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 369806.632411346
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 292604.471485802
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 208126.8677772124
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 1166430.9073848824
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 189532.45855974132
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 579743.6128734639
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2386073.6886094846
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 5258982.696974714
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 13920227.220306827
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 3324969.1237634863
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 4945672.124908224
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1023348.9193155878
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 4226310.842182247
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 257814.6729726527
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1185825.0336662063
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 341311.5902185309
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 174694.51011193806
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 274237.6508078934
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 787291.6742953375
                },
                {
                  "date": "2023-04-18T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 442348.16647083266
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 5309663.008891202
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 3074821.2628100645
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1514599.669506772
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 1241481.1221195303
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 1589395.1930026992
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 360069.88062795735
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1408702.9515818763
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 347647.310171363
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 274727.0457943206
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 674317.4850322827
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 371333.0294552957
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 261054.24952840095
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 26111350.955485567
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 6223383.346672113
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 414292.46932025003
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 14705940.457178334
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 42135303.28539271
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 994942.7940782785
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 969365.5050542916
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 3219599.120214893
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 207441.46046607904
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 133968.60370892324
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 305928.28110403323
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 83792.0449936129
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1544941.8667603268
                },
                {
                  "date": "2023-04-19T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1678428.2136353962
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 220799.16049527327
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 372336.9175042809
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 7507312.947491221
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 4354551.531022574
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 18141056.60561965
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 292512.4116659445
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 92878.59051556398
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 15464347.75021057
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 628061.3132760945
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 860946.1940889766
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 403016.74181626044
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 123124.67945291083
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 173169.76716304143
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 432907.21601607907
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 355286.38387190894
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 58764984.28722569
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 150895.9813069358
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 3703365.0817469647
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 450413.7768324884
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 632729.6679037834
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 260333.6786958251
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 2087737.7949853565
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 10169815.70338679
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 44118089.13383732
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 2138732.5586469984
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 952345.7365214033
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 194782.77817903765
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1231984.242636388
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1351557.5547963474
                },
                {
                  "date": "2023-04-20T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 3771759.0868024398
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 816524.9067028983
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 314488.73837232316
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 107237.65527370977
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 131254570.97426185
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 876718.1279895931
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 1683900.0474916417
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 393281.2196052017
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 559970.4176087705
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 13983409.67588702
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 235706.43711313297
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 3694563.7850633264
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 883926.1660511919
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 1230226.3630727017
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 981799.5548515307
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 946132.2396059323
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 2398349.46095488
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 654417.0621905238
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 754644.2516881612
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2812931.3591000144
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 982942.5715001475
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 709006.5328461421
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 819294.3069156777
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 418468.2660337017
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 172759.9544794349
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 790134.6306714052
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 510838.1148850307
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 2540769.812848462
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1943949.775059267
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 681478.2444191611
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 968159.6844829874
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 499748.4084364711
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1023033.7195545683
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 494982.636153219
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 596114.4622499578
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 327341.41968958796
                },
                {
                  "date": "2023-04-21T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 2525004.653326105
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 117366.44212508848
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 234213.9080985168
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 392263.5239887608
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 138804.6777506067
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 358119.4213426144
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 467750.3791485033
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 217377.6685444453
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 373101.3828047237
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 148503.01441625773
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 825579.8670331968
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1403443.303179397
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 7191865.632608344
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 142676.19198001476
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 559849.1955699092
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 910355.1090903733
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 892752.2313513363
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 4727510.629773143
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 627323.9437982045
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 281436.71413946245
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 1676743.5596347656
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 605970.0812137321
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 568801.2049619688
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1392892.6894586114
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 694507.6647524724
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 21788561.97008036
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 1537027.780697883
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 659095.0908792506
                },
                {
                  "date": "2023-04-24T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 456988.908637563
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 271904.73056139634
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1273769.4429419695
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 6794831.485258374
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 325907.3388158955
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 52183161.28261122
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 266921.3285576269
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 180139.54943056116
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 682021.3353100528
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 306641.5200175209
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 614251.9858366271
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 2272873.747141095
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 1911590.358561252
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 510054.3721852489
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 183621.86671643733
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 2747444.5182080427
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 461066.6284508131
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 722107.6623176339
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 213099.09597917838
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1322113.1014629456
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 554875.066317479
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 183051.26144397905
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1411149.8727451647
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 676380.3073687201
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 600637.895093714
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 985452.1057114822
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 266398.08767840784
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 259898.17365244502
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 317762.9138861664
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1977176.39676314
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 3074026.2401622124
                },
                {
                  "date": "2023-04-25T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 606781.7135982652
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1150761.1236535474
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1329851131.814204
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 518941.5616392123
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 497043.1660651519
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 667628.7243834249
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 4515942.373985757
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 248808.24823529992
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 478768.228873209
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 285357.1780415855
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 343240.56155010784
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 205828.3104562674
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 13039468.172084399
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C4M023",
                  "viralLoad": 511220.37144593353
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 449906.2460172664
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 522064.6806928966
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 237090.57990595858
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 12055388.435510045
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 2137552.534170275
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 284069.2497173345
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 134379.2610748551
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 23019299.83075748
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 59111445.21547265
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 292761.0441511516
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 16515063.57334754
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 1383122.6653728348
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 725507.1694614356
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 7532976.126428471
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 10153376.56164404
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 257901.50302903022
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 2279526.016602587
                },
                {
                  "date": "2023-04-26T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 2744338.3107425687
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 10530498.882835044
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 139053492.05659142
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 1062071.3343724513
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1626590.1571781766
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 2007382.0862103282
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 757709.2652276636
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 428105.84227058286
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 590640.3500643104
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 126975.03477371372
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 679871.9621418881
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 4360508.190901338
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 245300.53100306954
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 459146.02844986843
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 4510508.500582212
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 452481.728762478
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 529034.4546129104
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 17581.12186470956
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 76071.98641881665
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 524649.9877181434
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 3272265.317873367
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 7181784.7864590045
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 10309318.440303437
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 15334485.682088766
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 638438.1206311829
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 282957.9691708269
                },
                {
                  "date": "2023-04-27T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 614186.4569357564
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 540692.8565026155
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 238901.6823834752
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 241029.3794263521
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 16314208.826542884
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 11266948.214821434
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 759051.5480929601
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 230190.135694797
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 80769.69882917202
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 377892.3261675971
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 230867.58299895911
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 49527.516682816655
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 134427.86166930158
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 4622078.907942986
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 720781.8414055086
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 757233.530512514
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 2379796.747668204
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 246986.70651742883
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 831062.9583751909
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1280442.660792387
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 2037496.3056345927
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 208489.28327228612
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1304284.7961718023
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 1749913.3086922239
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 568544.177440601
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 206847.71861377303
                },
                {
                  "date": "2023-04-28T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 679380.7259943897
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1249180.7562242004
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 332285.80877962377
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 614971.8450644139
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 636262.355379213
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 3687683.813131772
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 666200.1907821356
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 155778.11814204926
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 143615.9453273893
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 2460728.7017254466
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 250812.22901813046
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 432070.295551421
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 176526.74323293898
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 6427507.630650599
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1343500.463623059
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 602923.0600687971
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 2199578.484719085
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 2999140.6242020037
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1462254.7047704356
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 123342.60523875174
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 549264.6296280473
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 512630.16345055186
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 419481.4710605939
                },
                {
                  "date": "2023-05-01T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 39440213.50157631
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 10796821.983502282
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 505710.45027119684
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 657291.0984677738
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 561476.7303241142
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 168367.18985533447
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 2354874.641395745
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 204352.78904922595
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 3360935.2903007455
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 654256.8766593171
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 643964.5427677403
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 708095.6925149463
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 840004.9873958128
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2855509.836636691
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 767740.4935775024
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 331415.21521400637
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 918077.5999266946
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2183708.6761563723
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 4356876.720823891
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1511063.3224273566
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 1387057.3673652697
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 2025839.1305855354
                },
                {
                  "date": "2023-05-02T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1699154.1295030413
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 903382.529828833
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 95548.07115725943
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 573951.7983092275
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 508459.7598107849
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 2359509.4063478243
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 3787557.370945086
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1290210.17453785
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 797102.359110582
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 543489.96133875
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 897457.4818283643
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 468393.750828097
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 422277.13520811644
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 1064392.2244272819
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 310843.0089151105
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 2009260.044143436
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1086060.2535568578
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 120680.22575751727
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1055846.7512815418
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 916659.0339111718
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 964431.8733384191
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1032937.4217516251
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 53050.16116512676
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 5573032.687875704
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 669406.037597233
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 2477816.1697286586
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 655570.1525696596
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 2173003.320716378
                },
                {
                  "date": "2023-05-03T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 14369204.894329244
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 271098.6840246332
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 188272.9839803696
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 151187.0287713996
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1274577.4032327023
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 12772231.158441555
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 6727912.142281654
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 574255.6531978144
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 4218068.764216919
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 281893.907535868
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 223719.72288888015
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 800175.2580231573
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 1108791.256721511
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 6262992.513169231
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 858398.732244318
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 733578.5241254994
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1194687.5574116907
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 2857597.7400323506
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 990265.0631042343
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 423438.19828023744
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 1962401.1362247246
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 9172603.414985912
                },
                {
                  "date": "2023-05-04T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 720811.0729338068
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 341336.21556423255
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 2441032.8499126686
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 890198.6196911952
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C2M005A",
                  "viralLoad": 156796.25415653808
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 6282460.253559545
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 348237.10317449446
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 572956.5288308054
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 204278.07012432828
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 873275.0050444942
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 468555.5173879199
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 586215.2158028453
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 5879342.942324354
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 4398052.828865152
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1985591.933172689
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 276636.1298578265
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1920916.1921494654
                },
                {
                  "date": "2023-05-05T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 459097.90291119454
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 812486.1062173089
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 410860.47765814845
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 423981.02781553817
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 451716.6694380462
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 154418.24022127775
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 321874.8385235429
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 22806183.19794533
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 13731241.711894693
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 159067.43150404777
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 3639918.9674504343
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 285288.577292423
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 363260.7133417325
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M152",
                  "viralLoad": 330559.04970120033
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 89442.49334181771
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 481455.9056522188
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 3238545.7115558046
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 257828.27613365444
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 1403808.0384934866
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 442780.63006663026
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 240105.92799156098
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 355071.6312424605
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 355276.1280206006
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 515463.286525104
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1549499.7687228199
                },
                {
                  "date": "2023-05-08T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 298649.164738106
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 453828.82851909974
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 501367.01922336104
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 224893.55940893418
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 466771.09281758574
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 962690.8173254537
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 529911.5622759098
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 99044.31210010278
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 312579.9770724166
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 3637119.8173084636
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1320476.3329566733
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 306537.7385239748
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 872158.4198253739
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 155311.42379863662
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1598540.883677055
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 349424.6642097723
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 459161.2206751368
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 268712.96387392434
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 388565.45011060237
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 237593.85231964692
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 570486.1545758938
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1035866.4497329171
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 204394.21028888374
                },
                {
                  "date": "2023-05-09T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 671216.4380518658
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 403604.0333267119
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 606061.4294550957
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 140081.97343665702
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 217012.12823366074
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 3463835.253970782
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 680838.3507185569
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1500381.4845625258
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 2881677.9189122445
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 235320.64747742895
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 12484531.492648993
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 4643964.169462607
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 4233202.497125225
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 430560.09236284264
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 735498.0061415839
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 6657823.517530193
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 806669.9037778584
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1097349.2939449446
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 786223.6413542622
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 589239.4733309794
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 968293.7411471345
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 2949026.8243073695
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 660637.9158358154
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 833377.2346773407
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 162643.98264577417
                },
                {
                  "date": "2023-05-10T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 67981.13314097829
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 246253.83707933058
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 668815.5630798537
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 3772044.55922241
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1452991.7369762592
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 236850.87901803068
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 652598.0692917925
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 779867.0337837816
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1061815.9933229643
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1198413.330044442
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 220483.97856486024
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 226481.81331233287
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C3M146",
                  "viralLoad": 662231.5326012295
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 1017349.0967003814
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 1531835.9700512933
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C5M008",
                  "viralLoad": 2258893.4957136433
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 1548485.805933291
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 232049.90033964673
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 194714.61395333376
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 4841359.502557399
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 1393487.5850627932
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1563499.1941612293
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 1721490.4570857673
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 3308717.3881143
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 9859112.833409764
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1521026.3343176595
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 257482.64034999983
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 384198.1479888427
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 314425.06319088384
                },
                {
                  "date": "2023-05-11T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1860507.2539571468
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 893842.7693831241
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 5191444.304941321
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1577168.7189976105
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 10356313.130830918
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 267152.94410859817
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 839736.6044914311
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 2577915.636687977
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 3814603.3201271286
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 4615328.607905711
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 3148694.3502766592
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 3470986.459576581
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 294659.9875999413
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2439781.7892666636
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 432215.42473008257
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 1867580.222164665
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 3863012.809483803
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 1457603.178441682
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 2127749.747493256
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2045685.2862075155
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 3016801.822859166
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 3074433.8530144906
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 3734168.6903697005
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 996415.5461275148
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 469192.22261078015
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 256169.30944210163
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 759866.1748170462
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 4581023.151283454
                },
                {
                  "date": "2023-05-12T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 87355.61709791089
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 5243.289687060469
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1382496.3495091184
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 1254344.429962553
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 139413.3329513341
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1090906.4333966663
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 3347439.3319986677
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 196268.77075884095
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 2493336.0414314736
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 2022406.057891727
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 372215.38983358565
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 1877595.924899143
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 292192.7737587236
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 324420.4682315124
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 326149.7164035974
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 3200531.6039725225
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 11869371.54229818
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 3672465.61692856
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 825496.2019204139
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1873190.0401147867
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 275481.3466062158
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 514257.5095160915
                },
                {
                  "date": "2023-05-15T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 957106.6653571072
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 162108.77870782308
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 369979.99283608235
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 513490.2756674431
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 355855.21444922744
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 710730.5553496537
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1529230.6896734976
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 3618891.3264941024
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 2457704.0980523885
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 744179.7581041704
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 576509.8749775704
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C3M159",
                  "viralLoad": 630612.5914611943
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 705553.7785411339
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 334766.05879056634
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 380332.29087508575
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 458229.0849923173
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 548857.2961984444
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 5567578.6053904155
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2433916.7424861654
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1035253.9006983336
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 328114.9914881826
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 498509.3048251215
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 390529.87177323125
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 429684.82796273177
                },
                {
                  "date": "2023-05-16T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 349133.11479750805
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 277778.6061126182
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 312700.10274030763
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 897772.4991509415
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 3304882.8446696824
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1344331.197423066
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 165701.6864068278
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 192251.67346087424
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 2626023.285172582
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 3397692.2139432332
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2000274.0797476775
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 234978.8496636991
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 216214.65774332744
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 93791.45416888039
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 861036.9218589131
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 801269.2610089547
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 27130430.922644343
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2693555.4013952925
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 79651035.94111335
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1643235.3582947366
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 188355.5898878743
                },
                {
                  "date": "2023-05-17T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1485731.782081366
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 203524.1816029442
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1574473.3045733515
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 3382683.9567429023
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 399415.0400090927
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 167039.66427858706
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 699504.2031351035
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 216641.70191906972
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 231844.97052935863
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 3346555.1123446063
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 4173874.903940047
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 318375.53496068163
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1118689.5940342108
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 26288546.65921484
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 301093.92800019536
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 915966.5404936869
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 1653022.025232833
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 210466.18200179294
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 852285.5895209635
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 3370046.1312401462
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1035726.7017106522
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 493247.7000235307
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 214458.40827241886
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 185032.82140692562
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 931776.8187223437
                },
                {
                  "date": "2023-05-18T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 178256.2960568846
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 358387.89417942154
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1824185.7364087394
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 975149.5572244923
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 296525.1086391779
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1423023.073033398
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 301523.8055510876
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1655624.8097403485
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 280572.52397458773
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 8845155.265795775
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 849572.154898744
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 4716761.188233876
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 3962880.357207198
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 933545.7301824566
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 2367937.009667612
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1890217.044811591
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 240716.4259703411
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 493367.41011894203
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 198894.9623782418
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 5224615.932014758
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 435002.9187501203
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 4204445.440316454
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 3579155.2955080797
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 11050186.844439257
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 171261.13255354017
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 157780.1132917365
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 10369256.880353607
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 8524059.603013217
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 147647.6401776142
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 848196.1929242619
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 356507.1003943198
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 825557.9720281416
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 555589.4452238022
                },
                {
                  "date": "2023-05-19T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 628908.9615895438
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 459880.1850916745
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 324044.62392687576
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 22804837.4185255
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 906413.1932949319
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 808005.8424212972
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 362157.91008330433
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 501131.51221948996
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1428717.825600442
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 798423.8888022202
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 3727978.1763455993
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 3605915.740830613
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 759739.3174770987
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 434386.7469793292
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 1795260.3490566844
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 502522.72653953487
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 581273.9804682327
                },
                {
                  "date": "2023-05-22T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 589701.7280077535
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 416604.9810277501
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 3856140.4559801808
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1219640.2259029867
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1089881.6876200202
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 291330.04585420515
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1545920.2052849415
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 905631.3404870256
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 730785.9880368812
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 2525385.8589327824
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 449467.20619266527
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 766810.6581365116
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 6661666.756867502
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 17346170.113827925
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1232100.4114227311
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 6897678.886100835
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 662584.1071116311
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 425406.10480621544
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 459935.583285026
                },
                {
                  "date": "2023-05-23T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 2220216.922185038
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 693915.5735955285
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 10731357.534008045
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 314131.01553137903
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 1537920.637577782
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 2342377.9943952304
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1132498.8514093654
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 2325834.9393121987
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1917198.4142210283
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 539288.2085730961
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 1630807.5987031092
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 366993.18098641536
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 1479559.3900806706
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 285967.5682699164
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 489630.7744371352
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 423737.5908080678
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C3M146",
                  "viralLoad": 710499.9367698757
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 1226200.493154009
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 996296.7938972362
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 825827.60795378
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 446305.284703931
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 741440.4310042122
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 579739.02500903
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 306432.21275621053
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 452079.80712473363
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 459163.11494228785
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 606526.1516902075
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 451408.4049457817
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 441089.910805628
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 544049.6313472044
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 838852.6764682564
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 494370.1250712288
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 600540.3465384756
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 676992.6262940856
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 415131.75132831064
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 5563036.449650616
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 619707.0581928019
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 450149.01080514316
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 554654.7027850682
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 373302.1783678954
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1272228.5271972206
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1815140.3251215958
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 167990.2640940685
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 272262.95494605514
                },
                {
                  "date": "2023-05-24T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 4664909.752868683
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 856258.549767433
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 253520.4727714374
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 5993100.724558581
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 3627114.5305967284
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 826443.7402070321
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 3111944.2607900565
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 2744292.2469219477
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 464305.7002455848
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 803270.9074623163
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 206250.89345845004
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 78266.2057838422
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 741693.9395284125
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1812589.513406849
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1063779.0547255413
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2622855.0537111876
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2592013.9746260066
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 2139417.13497558
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 1090497.5401996623
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 517630.8393519896
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 740093.8422211721
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1572249.070105915
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 696466.630479805
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 196028.10983116974
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 535028.062382788
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 280877.7532126402
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "SMISC-027",
                  "viralLoad": 84817081.01636693
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 5962289.475634405
                },
                {
                  "date": "2023-05-25T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1394020.751049127
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 234746.13872478157
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1356819.4619440404
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 1471561.3531017222
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 637149.7887112184
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 696007.2901028107
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 2252007.7492841026
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 439849.50987138075
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 294378.1212259055
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 496930.9616375278
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 844457.1855053533
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 485935.22376610583
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1136909.5414419537
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 360201.87826019275
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 177727.2254274007
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C2M005A",
                  "viralLoad": 590038.9408488113
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 239533.53420674131
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 108205.4152775698
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 227942.84921865494
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 135528.5560360748
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 879889.7053132749
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 481403.7783672534
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 551106.8326852056
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 74978.65821766843
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 330388.3519236327
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 2161946.5937693035
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 30705676.174493138
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 4034348.939742474
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C5M008",
                  "viralLoad": 127911.92945886991
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 563500.2338467839
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 2400321.269536695
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1776077.0894019306
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1931217.1650424257
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 952326.8307632906
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 4540980.452655553
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 570468.4451520318
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 384471.53309160564
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1274684.7055217645
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 472808.6640793264
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1535558.9536713697
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 3153676.303335998
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 2136718.8007178768
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 3249615.0172818173
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 4406309.139713223
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1367420.2646452028
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 245903.28840083894
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 881123.417626153
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1078276.5344960205
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 538021.2906002131
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1044878.7535597004
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 853478.8863374243
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 464272.0599320466
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 1420356.5431506897
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "S2M001A",
                  "viralLoad": 1738002.5238461776
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "S2M017",
                  "viralLoad": 3911524.7984325853
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "SANFORD",
                  "viralLoad": 1298500.3560702922
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 14520941.72890946
                },
                {
                  "date": "2023-05-26T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 344611.25481956435
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 390483.8220490714
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 3537108.81854126
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 555698.4171594521
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 589026.6830072032
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 2506476.9706234797
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 6472339.722158567
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 1536756.0411021728
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 1233528.2068203012
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 677985.9116033296
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 2629934.6518562366
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 760156.1432848872
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 533466.4400745758
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1764053.2241125924
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1140951.8579389881
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 2142428.079908465
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 283491.20620437595
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 873534.7274453683
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 807349.3009908107
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 2758841.0497248597
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 5748857.441123486
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 336089.4600164809
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 594870.7285821725
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 532307.9673980571
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 1903694.7031020077
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 339090.6726361773
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1293620.547735688
                },
                {
                  "date": "2023-05-30T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 323392.0617420022
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1409085.1669214554
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 2145111.2537896456
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 971218.1493200931
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 306212.04044341325
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 2256906.3165475153
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 200094.61822500516
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 55599.583634923416
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 75702.81213679104
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 825592.2248385662
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 205607.7188728931
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 81241.55605085593
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 4134526.4711987763
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 864045.4597638727
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 7590248.620403572
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 3185075.4226775737
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 9235877.182237348
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 525854.6227123201
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 206309.2815654773
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 716945.872726394
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 575013.7793500947
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 539304.654255018
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1242654.2490207145
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 697153.7525362865
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 1124842.1946498777
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 6721113.015796398
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 549688.8549645835
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 1141669.5496723605
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1795831.2757909852
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "S1M046",
                  "viralLoad": 1120268.8407474852
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "SMISC-027",
                  "viralLoad": 582179.9553471884
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1555816.0468154354
                },
                {
                  "date": "2023-05-31T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1017854.8192247362
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 1344175.6905180232
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 55088387.45259052
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 20019274.800226267
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 11048951.122404054
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 7725345.879967435
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 5051354.959619772
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1254443.6042560723
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 5346284.52423902
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 3906218.1209586626
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 2291316.847400406
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 518786.52181727503
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 1112246.251804545
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 3491857.9897339903
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 20346198.396413207
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 10387873.00307752
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 5590359.807494182
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 20386209.27855635
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 8461264.291715272
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 2693533.2779540904
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 17902648.788367998
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 2103068.4586670403
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 915124.2680349655
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2896069.673566395
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 4884896.366537278
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 4142536.414384763
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 8805485.215821587
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 2860629.8243587534
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 1670734.8276552283
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1325577.5017279603
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 3321601.0024569468
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "SMISC-027",
                  "viralLoad": 4533973.992295887
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 6160696.198070375
                },
                {
                  "date": "2023-06-01T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1880469.0342297554
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 663173.2395344267
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 2322881.9373399233
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 944339.4112087446
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 535176.7561359344
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 3077667.454638045
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 458115.26342020807
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 967312.0329277458
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 170130.24042205838
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 17892989.482626494
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 641227.9941715365
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 237211.53205396218
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 915822.0688674338
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 589661.287957411
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 25391082.621296734
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 6283553.651527716
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 9783085.208918316
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 1893539.6341643187
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1455917.098201812
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1711985.3724859604
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 1127204.8497979126
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 571584.2959796636
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 770791.4130805209
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 230934.2742135535
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 6135072.4682126455
                },
                {
                  "date": "2023-06-02T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 3744761.861878611
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 473655.6132692808
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 293151.6091433438
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 582797.8528632596
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 221485.648348941
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 74847.31366001342
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1819971.0018474967
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 1569251.175330971
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 3901742.790451733
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 59742456.04098322
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 937206.8742356249
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 596302.6833929132
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 458338.12009550515
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1286483.5888343137
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 1580586.71274159
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 1871484.1511358533
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1659302.0039510825
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 455356.84653087094
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 691111.5051701665
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 122636.83007025882
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 375026.5350597174
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1146426.4828570785
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 1145587.7172497392
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 162793.45013431224
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1327955.2004346435
                },
                {
                  "date": "2023-06-05T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 227339.95074097218
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 298814.72241296363
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 328000.7062047746
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 262607.7718028599
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 927666.0368446105
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 420435.64831252623
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 189737.24722273755
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 3209322.48116432
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 492352.4134930206
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 2878958.967471557
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 120980.3854369046
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 2987087.262497584
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 9532341.216262802
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1689939.9044837477
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M170",
                  "viralLoad": 12601464.922566017
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 1103760.4457495913
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 866269.743968887
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 4607120.245164075
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 5539027.455289211
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 780152.9231395411
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 2100890.7965074307
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 11319561.596008493
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 1867603.6876271355
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 1134418.2875589174
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 673630.6006505381
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 699329.7991351167
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 286963.1922104305
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "SANFORD",
                  "viralLoad": 54096696.69696036
                },
                {
                  "date": "2023-06-06T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 683413.8807670102
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 8678279.882523797
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 4361744.802160991
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 2994974.5491215526
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 151631.45500374952
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1638950.1757363093
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1581130.302608737
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 2585165.3076655543
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 1016291.1998451566
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 6295328.321945831
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 1869795.2004156874
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 15717022.144402027
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 63412793.93879044
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 7538958.690772136
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 2878022.093439584
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1154070.6731821587
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 617845.4611429668
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 1317266.055797532
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 2608488.4706262155
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 751440.8405686443
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2307588.2999288323
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 2052589.3236825655
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 1449506.860024345
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 7669871.455811076
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 3070206.4016437884
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1315626.392379831
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 2000034.7273316009
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 9818267.73693868
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 4523845.934515762
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 8321000.615083792
                },
                {
                  "date": "2023-06-07T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 662915.5997130238
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 592843.8316373582
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 917036.3686817039
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1212076.8793581524
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1371299.7049702252
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 528449.1926503227
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 723895.6824233453
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 870166.7818574402
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 30909581.139047682
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 4777483.5448798435
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 397413.388376846
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 4922869.506563061
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 7689209.802600556
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 467388.66062786395
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 8286438.902447493
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 708795.5185786895
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 170964950.1821584
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 831293.155306089
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1057285.386111669
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 485850.7363585486
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 2505554.7672271756
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 734332.2672522283
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 808825.7239128483
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 6906783.905394403
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 731448.991203019
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1340994.5083810664
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "S1M046",
                  "viralLoad": 1141417.251975541
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 4559054.774711895
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "SMISC-027",
                  "viralLoad": 6807119.218809032
                },
                {
                  "date": "2023-06-08T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1274926.4070384633
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 299516.53861534235
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 12516110.942623682
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 256538.5680246503
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 243516.12883265872
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 5215809.338438274
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 2231144.083994979
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 8097321.063867187
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 196015.16829374337
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C2M005A",
                  "viralLoad": 200797.0695551734
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 1018979.3439662318
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 420827.9897729004
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 455762.1949239542
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 2788955.4233716135
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 418980.30073678045
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 1751994.7299325354
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 214524.96902038335
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 1496069.5277679604
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 202739.79348526118
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 5501327.853582977
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 23730357.49770348
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 445593.76182185404
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 208135.33770569056
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 532152.5271301199
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 1447515.6149864944
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 657559.2785117466
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 25585.303440416606
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 272651.0589859557
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 271470.809148401
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 220457.94329653433
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 6394716.083853695
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 230564.3134953163
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1408740.6980251505
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 202911.644494718
                },
                {
                  "date": "2023-06-09T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 3749340.480172474
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 909872.3374264878
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 786950.2791859834
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 941047.5919320091
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 854265.0649612298
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 4747498.876653992
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1037900.3653468691
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 276531.214096806
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 993285.0745611882
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 43047751.621705085
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 4409550.73316886
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 63234.63235344066
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 478253.8540612899
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1678464.6570582965
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 288016.9383991903
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 10422777.431861915
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 3276660.613954882
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 6013711.27861158
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 705687.2731607076
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 872269.7491377285
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 237703.62795272097
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 2392293.020048849
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1193202.8412401923
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 1839204.7556306466
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 174606.23768337336
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 387075.2312098357
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 5497917.686348776
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1097620.8815368998
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 3148099.6138671027
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C7M025",
                  "viralLoad": 218067.98422022042
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 379104.8850616914
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 325446.5632328911
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 992150.4598175221
                },
                {
                  "date": "2023-06-12T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 4219211.026206089
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 142883.84684785933
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 2206749.54326588
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 8883501.715915333
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 4039101.5039484957
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 971474.1343038133
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 165676.81754818268
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C1M107",
                  "viralLoad": 1015460.2669174897
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 255750.0964132437
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 296114.54762065975
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 1090764.6208834648
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 248218.40824985373
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 460400.97551709565
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M143",
                  "viralLoad": 569621.0292817646
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M146",
                  "viralLoad": 3232917.7421746817
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 1553157.3284154746
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M150",
                  "viralLoad": 9294997.789568434
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 2506592.828370732
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 779343.7786705943
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 456596.50221605547
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 238384.1155699299
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 221498.4460777045
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 178891.97581043217
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 462971.72516858595
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 120809.65975123309
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 10742911.141398108
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 855613.7995466207
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 338687.94506149995
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 261802.0221499698
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "SMISC-027",
                  "viralLoad": 3281565.1792294565
                },
                {
                  "date": "2023-06-13T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 10012783.72560591
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 45456.41914820513
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 746171.8316169013
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 286610.8504420564
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 420259.2265272612
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 423392.8880796914
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 772975.0258287941
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 328914.0086145191
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C3M149",
                  "viralLoad": 967995.510048991
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1362255.746450065
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 1290385.2774024855
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 3708093.844016154
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 592099.1102806287
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C5M008",
                  "viralLoad": 3646074.24873743
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 332548.6071940646
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 669134.3008325343
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 3075396.2588363606
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 2338495.591137609
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1467763.2918086872
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 2301415.119674053
                },
                {
                  "date": "2023-06-14T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1507846.0158560993
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 1196758.4951627704
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 400924.10179451207
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1925171.2095215616
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 229678.32152651428
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 493005.75140225457
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 464431.6288326867
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 853945.113619836
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 363204.7566472609
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 1625047.190762907
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 672647.9795989165
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 709082.7763413704
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 26810.129413382932
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 1848564.9248716007
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 6381758.562328074
                },
                {
                  "date": "2023-06-16T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 745321.6482021625
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 438298.5577848382
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 2875447.137642677
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1252892.2568276217
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 14543685.678840524
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 706230.3098135225
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 291004.6175987645
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1855972.7582552272
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 638863.8964235588
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 337773.2129446045
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 736209.7473696588
                },
                {
                  "date": "2023-06-20T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 442919.9847580916
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 484264.9324848659
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 418973.64311217726
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 48664490.78928566
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 644381.5721640617
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 2899096.296780747
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 472563.9237333024
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 1669305.5632626396
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 140339.9797350993
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1419489.7979077203
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 2745664.931396937
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 2112452.9903851575
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 6591628.921981794
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 468266.0469271793
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 2045499.435555646
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 5094494.287383005
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 1813791.6746941847
                },
                {
                  "date": "2023-06-21T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 1315135.2405402127
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 270966.48933021916
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 848667.7848329854
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 383609.418621395
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 90339.29510179441
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 5946220.91795803
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 57785888.01824817
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 1854382.0059097575
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 72224.48743630003
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 583074.054977914
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 13282117.71636658
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 17474598.42048936
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 318780.3960207481
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1054184.7008673437
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 3578086.501979871
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 1773665.1026358167
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 608553.7651547975
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1092544.4094498905
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 409468.5539816396
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 610414.7288948136
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 494226.706003048
                },
                {
                  "date": "2023-06-22T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 38655.9894609163
                },
                {
                  "date": "2023-06-23T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 192720926.1778468
                },
                {
                  "date": "2023-06-23T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 209334602.71188676
                },
                {
                  "date": "2023-06-23T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 9793343.575875973
                },
                {
                  "date": "2023-06-23T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 47331009.55043951
                },
                {
                  "date": "2023-06-23T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 806005823.6323317
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 1221339.9866314065
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 5244330.692893652
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1117064.875678749
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 4772558.924318795
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 377282.4632542758
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 357096.5226890027
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 825460.745487469
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1021074.4610391816
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 601241.9900153788
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 311197.38728939055
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1238752.4249641139
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 678547.5517210867
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 1323610.3319021855
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 5395309.70053148
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 551135879.1725237
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1158728.658931342
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 608393.5613263472
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 1685693.6236145734
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 720217.1657420523
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 1697218.8526296674
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2320198.0600558114
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 2433039.623779679
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 3494655.5217641895
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 148900.50009805916
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "S2M016",
                  "viralLoad": 672074.9940975856
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "SC0688",
                  "viralLoad": 137557.57227070295
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "SMISC-027",
                  "viralLoad": 2010116.2062698393
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 346707.03289015027
                },
                {
                  "date": "2023-06-26T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1002795.4157674139
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 387661.95313692477
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 117784.41177944433
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 672274.6650006016
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 747556.0669793026
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 7829235.147073598
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 215299.82235647144
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 296209.725328165
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 180361.42941460406
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 432860.0894329502
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1285945.435658092
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 205679.0128337064
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 428074.76697581034
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 495344.4507398176
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 316721.18270239723
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2349501.6681688996
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 786210.0571530693
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 949749.3692921877
                },
                {
                  "date": "2023-06-27T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 625327.7623643365
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 220092.33298605314
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 6088055.828005866
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 691133.8118346387
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 77694.61296888196
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 265912.19208182424
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 2401058.2396269245
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 419936.83177923464
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 581241.7655732045
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 975175.720255627
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1086561.8774213467
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 975545.9905867093
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 491601.6490046096
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 1116578.6277717655
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 145023.54770915685
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 545629.3289940114
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 913327.9545082417
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 4622532.97888863
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 355404.8836446995
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 2617317.799331042
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 640907.4577330723
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 2176618.0377234183
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 377723.6390209086
                },
                {
                  "date": "2023-06-28T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 242286.99937142525
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 97998.37865330112
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 703802.6989443875
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1503303.3279840236
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 369106.50728370564
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 352403.5361559303
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 386935.18674364354
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 6171277.025088807
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 341461.376214765
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 91784.72284802413
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 461857.2494020141
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 578774.8115297604
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 1665403.3920829054
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 8697529.89824959
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 559373.865533621
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 1653148.1127582018
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2658381.9542003754
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 178474.51959092775
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 2033846.6299960685
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 677570.9622427924
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 326151.21742629394
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 1559866.6670422638
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 332462.54560091975
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 874701.7135649186
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 895058.7644180123
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 239088.3354725304
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 139121.45814625124
                },
                {
                  "date": "2023-06-29T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 26110.764510301902
                },
                {
                  "date": "2023-06-30T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 57729157.21988638
                },
                {
                  "date": "2023-06-30T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 3661919.2239576722
                },
                {
                  "date": "2023-06-30T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 32173471.04418561
                },
                {
                  "date": "2023-06-30T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 22508118.205171686
                },
                {
                  "date": "2023-06-30T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 8405688.474319449
                },
                {
                  "date": "2023-06-30T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 18101594.539214827
                },
                {
                  "date": "2023-06-30T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 27761669.674893506
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 1371643.5793551297
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 654970.2039749721
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 4024517.0452729715
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 473616.50912478636
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 587374.8281755513
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 556232.7743264012
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 79913.07239616214
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1099891.5320510517
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 826363.3624794423
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 168886.0705021346
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 309405.7174263582
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 780835.7282340138
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 504824.7449355926
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 1662614.3647632399
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 331975.8421757747
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 354731.1271320773
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 411778.4606587937
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 822060.0904795144
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 644225.9176223892
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1221206.4689293343
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 431178.9617207027
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1710755.54494227
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 388156.8935529606
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 692560.366978293
                },
                {
                  "date": "2023-07-03T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 1216725.5302236828
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 5815453.562218597
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 875913.785880101
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 1286031.0211683598
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 913898.579314325
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 2460783.669723574
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 728023.0150316746
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 1854737.7615867658
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 447174.3916288563
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 483248.0912716104
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 493302.9890255745
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 523368.92306436726
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 655456.7683585716
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 732271.1871816318
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 1363755.477809912
                },
                {
                  "date": "2023-07-05T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 750402.8276604494
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 4697870.569190029
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 258634.89217893733
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 8653715.05909265
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 921657.0596903039
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 113373.15083492712
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 133405.1562782234
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 9590710.310987564
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C3M091",
                  "viralLoad": 548430.9512187853
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 455429.19086286717
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 747879.2795727216
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 482375.99856832763
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 310604.6155236023
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1690020.815825829
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 6959920.860451863
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 597564.1951649497
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 33451720.210916497
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 15374923.193254221
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 691362.4383134242
                },
                {
                  "date": "2023-07-06T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1023133.0525060624
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 415451.30604598793
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 359805.93285055034
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 582864.8992656288
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 10309.952105984967
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 92860.4441480227
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 8596260.388280714
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 147310.77425876074
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 338011.903879936
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 377492.4521033951
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 368416.5913201681
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 539482.8594695257
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 558314.4951047236
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 309351.5469448201
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1058605.6858906418
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 2712344.9577153823
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 4857470.324312476
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 458365.2046925341
                },
                {
                  "date": "2023-07-07T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 768306.4411594478
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 207700.8077050348
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 137795.95196787288
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 421678.39489368856
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 309837.6192369402
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 84286.86824146727
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 17282743.059073567
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1020209.83751055
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 651250.1519266105
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 3294529.8402776066
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 329389.78797324665
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 97733.15814237858
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 251271.6499834954
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 26670.569138409257
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 22880.360866936182
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 1366921.96322432
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 11235448.284208199
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 292357.47194536665
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 307600.3763498557
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 563689.9894781957
                },
                {
                  "date": "2023-07-10T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 137058.6389383114
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 633675.6601004075
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 354172.85458402673
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 595006.0962909297
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1626099.5795117489
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1167820.5128424584
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 166479.7363736026
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 396568410.82752484
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 8292313.178478184
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 346450.816723895
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 664227.9319859975
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 8607.141268754636
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 471009.5209522876
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 1911732.8747534482
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 449975.0001096258
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1155827.1385905545
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1704257.1481239405
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 573819.7408616919
                },
                {
                  "date": "2023-07-11T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 476594.28631254093
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1556852.990867004
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1527647.727525857
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 483025.8045920834
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 955134.5827421559
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 17079878.098726213
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1813432.7343139946
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 600447771.9833571
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 145722184.46677923
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1028697.7586737042
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 16104120.746615553
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 14532687.156886874
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 6478569.091445414
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 13146190.832070908
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 23686182.6715771
                },
                {
                  "date": "2023-07-12T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1605612.3882575869
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 278398.443729615
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1974507.654280426
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 678057.049230187
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 426164.1493200946
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 242441.58341364202
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1445529.7957986714
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 260137.8091458855
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 409453.4513971957
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 1599223686.2052112
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 5071564.127363663
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 461851.06195917336
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 112916744.03642854
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 3832782.6036392725
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 81258.74277098023
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 2669305.552826171
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 4753191.389233608
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 1086783.6698698082
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 362855.769850629
                },
                {
                  "date": "2023-07-13T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 420507.8692183942
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 643773.5802037278
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 375334.9064888735
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 1191941.705317704
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 335457.3061884878
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1183844.3038041398
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 2037080.7980008698
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 92409666.2106544
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 7239599.275862018
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 953010.794893969
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 131877.39926056852
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 425435.4765447908
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 741744.5895357347
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 536347.6834463229
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 3107943.825537703
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 3212701.8884414677
                },
                {
                  "date": "2023-07-14T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 2972811.1137082204
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 250916.06818873817
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 379438.94558169856
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 572021.9767839588
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 389159.7808533803
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 1217063.7156979106
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 508642.9067610041
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 246501.51833435864
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1902392.254799412
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 1576805.314141597
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 271342.1582163998
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 33662179.80771284
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 1267283.1981181637
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 129994.05737620797
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 32763066.545637127
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 263562.3965771704
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 349019.4345160957
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 362068.1061815956
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 171561.49067662001
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 993620.8302748812
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 378842.1297664419
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1967815.0876443118
                },
                {
                  "date": "2023-07-17T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1642529.819977099
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 947690.5722432806
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 313289.0276509186
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 1667390.9493978028
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 161358.54945874162
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 112875.37756405535
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 230287.4134148749
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 653475.192628645
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 96382.3005525256
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 545281.3745661039
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 521188.6604711967
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 220248.77610938525
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 5357038.726874069
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 751016.7787614804
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 1296515.5560384213
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 3390970.7122966503
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 2596638.845737933
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 649793.5432894763
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1971406.2072887411
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 776792.4022017266
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 1847104.16440041
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 583594.5395629904
                },
                {
                  "date": "2023-07-18T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 1210664.3090018062
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 759784.2836519093
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 3483613.8873887947
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 22202.490510302014
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 167323.92354930917
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 611811.0072560823
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 325371.58341637516
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 383102.66996690276
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1112802.064039277
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 451638.22191308026
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 184326.3554969912
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 879315.148356247
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 846790.1348146122
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 230934.12068787735
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 106049.96149432188
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 587590.4325835551
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 260255.2338296265
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 139944.5160148605
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 85984.6885366467
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 798796.1769878326
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 207874.80528515214
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C7M011",
                  "viralLoad": 915755.5037167342
                },
                {
                  "date": "2023-07-19T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 530895.3992521
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 131417.2552810002
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C1M031",
                  "viralLoad": 962635.1042760616
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 262029.81536263385
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1203349.8030762514
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 969983.5721887177
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 2221555.1573708286
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 3535020.3619367136
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 451986.8985114334
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 179977.77173841393
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 526766.149439966
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 2138060.3435003534
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 807573.5511405966
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 141013.40919138334
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 170040.60645776466
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 771195.8758104106
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 3502439.410698355
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 2108466.5626648134
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1001817.8411756264
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 6036509.783141008
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1423896.0968637094
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 30286924.29763145
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 458014.7804307902
                },
                {
                  "date": "2023-07-20T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 6125203.681921813
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 330053.87235721725
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 7142103.988805911
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 878607.9200371488
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 635306.0447070196
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 189931.9299929641
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 914507.0623826815
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 294339.62041876843
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 7078917.3429157445
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 5668616.260552408
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1171620.4093872441
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 25939.446556579493
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 1736419.3773967572
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 3384205.3005205346
                },
                {
                  "date": "2023-07-21T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 2254726.1401196634
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 1429502.2589914897
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1038056.2823427983
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 930856.8509197511
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 178191.46774012456
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1357299.7712676672
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 1416756.6481169928
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 4183661.8229819364
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 652125.054510363
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 8053177.495062411
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 234141.81908587329
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1473131.2621132066
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 53071.21207805153
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 128111.5433653332
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 567475.8299643204
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 286101.0728244249
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 1486612.8102948654
                },
                {
                  "date": "2023-07-24T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 934887.5939445748
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 2765617.785813023
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 704779.439177404
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 172047.5502586699
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 3434370.4257188607
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 497257.5249997848
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 2160826.4199930853
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 712756.6564847818
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 22335796.447310396
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 439880.18632830546
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 3749737.6096866825
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 3246133.6868080134
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 10953465.543626156
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 10525166.330534123
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 305685.262901509
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 1732251.2858237843
                },
                {
                  "date": "2023-07-25T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 766466.3866677358
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C1M022",
                  "viralLoad": 595602.0376757832
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 1108809.4639185874
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 2793137.4088013144
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 164345.1074994283
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1524375.4097427651
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 4416109.882120477
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 5161242.75686299
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1803418.33207451
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C4M083",
                  "viralLoad": 1415437.644724722
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 138752.0972664742
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 4612487.835183984
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 979288.7592548106
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 921669.3708649018
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 3999421.8479901715
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 2125986.0912166233
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 6874270.575741888
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1386240.1391421969
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 881188.4521760165
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1517354.6794824954
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 3661386.854352537
                },
                {
                  "date": "2023-07-26T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 10808724.016876485
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 65022.56418199417
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 2756153.1449934132
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1362952.023781009
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1169055.6857537536
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 324614.91280880914
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 2028740.367402866
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 320412.66850175726
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 2073314.2836115817
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 965928.4268464119
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2076365.9368991223
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 208899.5951973886
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 1992646.6501734832
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 1083987.767330049
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 2520673.204966171
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 675529.6343319382
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 186115.29983675416
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 842807.7271779649
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2148022.6145199393
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 433490.2306533947
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 554938.1813336967
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 900687.797670501
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 1695125.969098396
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 18264150.41800388
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 164666.84491832837
                },
                {
                  "date": "2023-07-27T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 960200.2783006325
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 613611.6907648796
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 408275.7497039432
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 968742.7199253795
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 340904.17915221094
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 921260.4134279673
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 5939213.023703764
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 482004.60366553575
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 523647.8403393471
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 612037.1039305205
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 426125.6225551338
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 631055.4185639691
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 95658.57823788558
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 716812.8805705127
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 643341.923539769
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 3710152.6194740394
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 13679947.185134368
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 617436.8167792377
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1140517.2831300073
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 876266.3388785076
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 317287.4520890889
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 838054.8258848834
                },
                {
                  "date": "2023-07-28T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 71932.44749546285
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 148420.80740530786
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 231258.10727364194
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 482680.14601736557
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 1627783.3663040963
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 114751.61516382122
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 135167.33171530644
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 576165.4653021973
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 832049.4661071952
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 132657.6357288854
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 6432410.349143075
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M043",
                  "viralLoad": 641601.8137639818
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 752108.4327401901
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 372321.60831602843
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 269875.1218241047
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2529259.9391249493
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 3857190.9895251356
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 1346573.4205040804
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 309864.2597410614
                },
                {
                  "date": "2023-07-31T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 692338.1765136856
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 743639.4865600092
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 148237.93810769625
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 156369.02980243642
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 1255722.29642963
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 199377.2471106582
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 546069.9580375629
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 1324380.7353730702
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 1443641.3787017392
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 4136965.577533183
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 508458.30337521294
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 3784201.8876213664
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 358100164.8905916
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 34409301.191199996
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 530495.9791556626
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 182948.514604807
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1212674.7626116115
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 9952944.749542568
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 12370488.624233305
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 16500994.870260429
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 19872749.220994066
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 17058494.643159375
                },
                {
                  "date": "2023-08-01T00:00:00Z",
                  "manholeID": "SC0322",
                  "viralLoad": 648529.6615077505
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 132708.72894412433
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1728861.3932364576
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 5309882.885782267
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 186549.80043024977
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 755777.36233802
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 577451.22634812
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 707738.4265864093
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 34633.82169413359
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 139012.45992485314
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 326193.59122344374
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1700871.8477051815
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 8181804.320662521
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 32608550.54933199
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 225893.56027384847
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 404484.73029768426
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 1114081.0125169368
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 3898793.937987638
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 2472643.3438502555
                },
                {
                  "date": "2023-08-02T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 63682139.74410268
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 630863.6625663526
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 620266.8146430664
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 870118.8475038534
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 1078897.6344756382
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C3M109",
                  "viralLoad": 232718.53942025415
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 4248181.2576874085
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 151337.02998577576
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 15488351.349233625
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 399069.12585822714
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 292687.824365346
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 197441.54640403853
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 517920.78920695547
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 751335.2381710708
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1754598.3184549469
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 277800.7684101453
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 6768512.80238287
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 321590.7891295773
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 1305834.7631817826
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 338254.3269631125
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 904934.5083470356
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 892831.8901325885
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 4159274.6217661
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 1791152.3984465115
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 8713238.187617144
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 1097439.7749711575
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 172118.69912726592
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 1169492.9600129484
                },
                {
                  "date": "2023-08-03T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 328970587.7077301
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 5128769.159283966
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 567704.1741680943
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 2171525.133595187
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 113668.49697623965
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 75118.01391741775
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1316132.2806238418
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C3M049B",
                  "viralLoad": 2419081.049532343
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 1154463.991298421
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 5707541.880479478
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 539414.8801331952
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1807081.9906385727
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 571988.7084917009
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1749055.6763937573
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 868094.3808081513
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 4990790.874279613
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 14909844.491735313
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 8598434.0005797
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 52261861.86194399
                },
                {
                  "date": "2023-08-04T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 137998716.15169677
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 21448832.010110717
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 1789751.3678412603
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 743670.1539008071
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1352324.4485954554
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 183583.47742194327
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 516107.1487706789
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 3301783.3095764164
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 1414590.1440241875
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 3149098.241367103
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 6018716.480928206
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 1487012.725010908
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 41826485.64219846
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 2847026.1145103592
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 756952.163994338
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 2198429.5276026437
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 1351403.3865682445
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2580403.511375562
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 4933306.992244506
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 37776200.92132514
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 5008978.766760667
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 17992.11007479401
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 134421.3222786572
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 109678.89410314568
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "SMISC-027",
                  "viralLoad": 13318721.736658337
                },
                {
                  "date": "2023-08-07T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 2858185.397403483
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 1064811.7069655256
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 1156523.8031997946
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 1572901.817156447
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 486904.17760950804
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 810814.6287744861
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 7660968.22929342
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 426240.7576743769
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 419506.2642279093
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 36878.34427715228
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 730322.5960862874
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 223770.81648884385
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 765582.7225740895
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 919796.9056671371
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 7771521.475021651
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C5M008",
                  "viralLoad": 2496658.1306813336
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 877766.7839443417
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 3465897.6047337265
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M031",
                  "viralLoad": 5180677.434206252
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 8928159.760704247
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 19420130.39945864
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 978678.4331251862
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 3622497.6776008634
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M047",
                  "viralLoad": 3368918.311567042
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 561431.2442640292
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 597715.173984104
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 4592632.992871971
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 2469443.063383547
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 16282420.51706445
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 378674.8366355093
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 731958.6089877951
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 165678.21739221638
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 303518.85572959005
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 1655786.754725791
                },
                {
                  "date": "2023-08-08T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 11669834.793286653
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 18467111.42550205
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 201836.08147071727
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 1177641.8208894173
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1168992.5414556619
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 761375.3603930162
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 4083939.359466556
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 536318.8007880058
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 390418.4111487697
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 4080031.1870506112
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 109783.31359756985
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 249135.2413115649
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 676415.9023021717
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 630685.4881077115
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 3624203.1242468935
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 878446.8958961712
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 564718.8466770747
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M030",
                  "viralLoad": 1573867.0655907022
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 790713564.0038571
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M041",
                  "viralLoad": 5112017.63388601
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 2505392.3387289084
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1762265.7965214332
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 9417043.50612909
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 457359.2054250719
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 659084.2235366779
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 2276428.479411087
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1198285.5464398337
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 8001252.094650591
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 4833660.209947738
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 1278866.202072022
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 2925618.487801863
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1656029.7108621674
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 906172.3258173041
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 347716.7089036242
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 193411.9249209757
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 55083.16389150865
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 571385.8765038016
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 1382625.3442029192
                },
                {
                  "date": "2023-08-09T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 5625599.148240763
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 1316153.4310531076
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 1288846.072998613
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 1680726.8047800458
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 883886.2684888459
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 12442701.221536718
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 135710.1345746449
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 350095.99020829843
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 808696.2174393585
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1146153.4993625404
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 412341.31124945387
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 598164.8298819463
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 1338167.4626111074
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M011",
                  "viralLoad": 26577714.09335872
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 884819.4898479669
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 2338244.8510702997
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 8162211.305223579
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 46017371.72190616
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M042",
                  "viralLoad": 603436.2249873582
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 604830.18017667
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 89478.19426519278
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 146522.02492281346
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2081384.3458556524
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 15886291.2780547
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 790621.170025576
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 593861.466956403
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 18984560.73239888
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 16018808.528157158
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 2440437.3549335455
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 22417568.015709028
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 275782.59593904915
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 325169.4920782289
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 192737.60487812877
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 112461.42685040877
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 2558845.136082124
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 179267957.04697093
                },
                {
                  "date": "2023-08-10T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 1437331.092916319
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 397747.6137397209
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 2050868.7210204625
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 741162.4291501022
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 617212.3311973306
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 569649.7719691488
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 533413.5415349336
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 2867912.95354303
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 1909766.456554824
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 605696.511601133
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 949137.3500613171
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 5605322.894585856
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 6699376.970005417
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 2018820.0722729238
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 282526.9682185843
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 544840.1261336352
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 49854.06672975926
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 1306878.9217155871
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2189686.5836136537
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 6230492.354825739
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 6962289.798543568
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 4774137.63682814
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 10468279.095828978
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 27527934.962244056
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 1973202.387097752
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 1523845.1699633857
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 1401864.7649105815
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 63107.988738308384
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 8726648.00188972
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "SANFORD",
                  "viralLoad": 1000144.5164959527
                },
                {
                  "date": "2023-08-11T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 4216817.962536388
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 214940.969560561
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 3093323.1999986907
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 37785.67843670049
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C2M008A",
                  "viralLoad": 379126.35204312886
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C2M015",
                  "viralLoad": 122705.40278276149
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 2263844.538059087
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 188665.85247578178
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 10486444.742772957
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 431118.2288810296
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 514059.6413539009
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 2587695.338497051
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 223835.47937496268
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 2065242.9772128426
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 6044552.41147114
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 618871.9846816168
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1306955.3150415465
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 29518985.08231256
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 14140701.218477055
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 850760.3049907096
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 399217.68373918626
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 360068.69891187205
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2310476.1417960203
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1573164.0633827888
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1828830.656822306
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 1370142.2547849994
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 5851936.306953293
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 11771074.306673083
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 5299115.587375792
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 84737.66097021526
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 524243.5709475486
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 2821046.292967325
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 361784.94380705594
                },
                {
                  "date": "2023-08-15T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 475768.41245698364
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C1M039",
                  "viralLoad": 4073275.4996756413
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 529500.4071998959
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 3473999.2628699928
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 52557877.86327878
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 1143739426.305239
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 1231351.4662213572
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 3275487.5524412547
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 1019435.7230422935
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 712074.2786231684
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 1006292.0508633718
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2012010.1120100503
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 2066712.4173552988
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 815379.3948735165
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 4383706.044676895
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 6482195.968625912
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 819744.2362199535
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 1864687.8773454418
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 60748645.206089765
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 2745346.1423089947
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 17713094.257628992
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 1778681.7057949023
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 11044764.166645858
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 66133790.451557
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 3471245.3552695406
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 6624431.089809087
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 557667.7668494303
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 5705909.894926731
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1315693.6926234371
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 101475.27169937175
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "S2M003",
                  "viralLoad": 2484590.085308478
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 905963.8201568753
                },
                {
                  "date": "2023-08-16T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 157990.31609682224
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 992298.4866761327
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 19728502.547066886
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C1M060",
                  "viralLoad": 1226188.108484024
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 135314.3191411182
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C2M006A",
                  "viralLoad": 1493416.15449988
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 60626229.9708833
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 410788.3272193719
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 11282541.438758945
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 3095022.2598642576
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 1703587.2178388725
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 954566.9218658446
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 1280393.2815045214
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 5341935.621173451
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 6941753.899114278
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 3078183.9316696464
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 2416490.728568292
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 510363.8452098684
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1472764.4319793282
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M049",
                  "viralLoad": 17071679.41197085
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 23964300.24724551
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 4490730.446995407
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 508068.4040891128
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 5153478.976637979
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1303035.2272670316
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1536304.0003302095
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 643226.92355109
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 16329903.12168755
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 6570917.082592852
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 242484.57599249066
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 2010715.2651719686
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 4526465.3821116015
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "SC0157",
                  "viralLoad": 517089.6636163658
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "SC0322",
                  "viralLoad": 27238539.64098303
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 3183240.9925925843
                },
                {
                  "date": "2023-08-17T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 172628.534034976
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 497500.7678152093
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C1M053",
                  "viralLoad": 2202329.666732606
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 48842720.09723493
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 8940876.562635982
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 77338447.77080925
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 999394.706596141
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M010",
                  "viralLoad": 329857.4033719318
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 148788605.48864162
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 2336665.4457810773
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 4160861.8122805557
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 191763.0506616521
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M158",
                  "viralLoad": 134018.2929194467
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 816146.0750023363
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C4M023",
                  "viralLoad": 1431350.2118591631
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 2341366.789180021
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C4M045",
                  "viralLoad": 517899.29217541846
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C4M055F",
                  "viralLoad": 871736.4663071336
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 418609.150204165
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 11382104.696117613
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 248541.67340832143
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1720839.2096343206
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M034",
                  "viralLoad": 1574156.1718296332
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 496275.1711111579
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 41215318.6958497
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 7296371.390772562
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 1039147.5658609547
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 3198044.3510162183
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1412677.1837126634
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 9190699.99534894
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 5548046.747347097
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 271474.2178665267
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C7M024",
                  "viralLoad": 1251103.8723090047
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 787171.068382607
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1902486.7212556421
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 545250.369830627
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 799200.0717027565
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 370567.57213576854
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 1027123.146949295
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 3186765.9568504565
                },
                {
                  "date": "2023-08-18T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 509821.1912205426
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C1M024",
                  "viralLoad": 27349077.908469006
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 27053259.653938204
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 1688367.0925954855
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 20148094.04542146
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 13641396.189276906
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 8127244.733094846
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 23934764.959238175
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 3833495.467932733
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 4784884.258288052
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 2132635.3356399564
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C3M210",
                  "viralLoad": 818207.5492182191
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 681882.4485477593
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 5173760.951434569
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 1129917.8851930536
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 4385798.873058835
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 7310672.89125397
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1615214.8171241542
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 5854894.823726596
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 4375836.44677801
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 7074788.5992023265
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 7679120.580212284
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 1795731.5022066815
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 1474047.694406762
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C7M014",
                  "viralLoad": 682792.0788968576
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 1260681.2168854652
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 564197.342654522
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 7642832.7384946495
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "S2M016",
                  "viralLoad": 8738869.753311258
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 2347178.19775666
                },
                {
                  "date": "2023-08-21T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 963007.4201682885
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 2738324.1246652096
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 453164.61572892324
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 1293690.6214660853
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 1730788.6604117455
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 1273380.0330208424
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 2195222.3621745696
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 9740182.811713986
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 985545.3126097322
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M026",
                  "viralLoad": 274691.3247877209
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M027",
                  "viralLoad": 113844.82994003402
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 540918.9853780997
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 260291.07694569058
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M108",
                  "viralLoad": 422292.1619436219
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 1062796.5940229816
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 3371121.62520957
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C4M031",
                  "viralLoad": 2597806.542313158
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C4M037",
                  "viralLoad": 603131.8544076089
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 4794266.131982991
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 883932.3993818779
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 1883517.945931069
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 5230092.246131601
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 24340182.489315256
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M072",
                  "viralLoad": 574566.5007483475
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 354389.33758992155
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M078",
                  "viralLoad": 5746283.209420419
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 1069214.868403723
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 2509155.1620780574
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 5363125.705352127
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 33149058.193160623
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 4019731.4828768256
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 11752208.919106532
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 1201050.9981324256
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 272240.2982072703
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 1605153.844591787
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 2868671.7137210076
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "S2M015",
                  "viralLoad": 440997.4136436218
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "SC0322",
                  "viralLoad": 32851964.792708497
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 464216.5395693901
                },
                {
                  "date": "2023-08-22T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 601434.5043794238
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C1M053A",
                  "viralLoad": 3463737.2211486455
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C1M059",
                  "viralLoad": 372472.30771195114
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C1M106",
                  "viralLoad": 611846.9358854234
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C2M032",
                  "viralLoad": 578022.6626616787
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 3168349.154491523
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M006",
                  "viralLoad": 941883.2159389937
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 3276269.385480366
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 312036.91689487745
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M024",
                  "viralLoad": 194003.485332116
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 197854.09932013205
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 442829.0179949756
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 371679.5096329871
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 1223249.0239566246
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 2962859.9880127595
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M010",
                  "viralLoad": 12590817.001736427
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M012",
                  "viralLoad": 697903.3975448451
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M075",
                  "viralLoad": 681951.5922243501
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 2299630.839085286
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 16321678.66815514
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 4037048.373871249
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 2768853.9681573473
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 1865819.1869964502
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 7451053.985120455
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 43380426.68016613
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C7M008",
                  "viralLoad": 11188166.089703517
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C7M012",
                  "viralLoad": 376353.12296229275
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 2248251.1386863096
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C7M030",
                  "viralLoad": 2346102.467650565
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 464879.19987314206
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "S1M019",
                  "viralLoad": 2949836.384146482
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "S1M046",
                  "viralLoad": 2275750.8674255824
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "SC0322",
                  "viralLoad": 9156733.937254688
                },
                {
                  "date": "2023-08-23T00:00:00Z",
                  "manholeID": "SMISC-080",
                  "viralLoad": 160516.00080923943
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C1M028B",
                  "viralLoad": 2487013.7500174753
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C1M049",
                  "viralLoad": 2699009.5374193294
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C1M057",
                  "viralLoad": 3255490.935336276
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C1M161",
                  "viralLoad": 299966.7968602813
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C2M003",
                  "viralLoad": 2543832.8776417654
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M005",
                  "viralLoad": 15117468.216308601
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M007",
                  "viralLoad": 4011280.0602093483
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M008",
                  "viralLoad": 3362892.3334433716
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M022",
                  "viralLoad": 11177234.669505965
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M049A",
                  "viralLoad": 28310196.088634036
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M095",
                  "viralLoad": 1370967.4064968948
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M097",
                  "viralLoad": 882485.9786566328
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M187",
                  "viralLoad": 4793232.408126709
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M206",
                  "viralLoad": 193824.0162413083
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C3M219",
                  "viralLoad": 1275589.6400501698
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C4M072",
                  "viralLoad": 5816569.831408482
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M021",
                  "viralLoad": 43234653.8339765
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M025",
                  "viralLoad": 2122826.3880393645
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M033",
                  "viralLoad": 1392284.227837614
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M045",
                  "viralLoad": 1905435.2979229786
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M046",
                  "viralLoad": 6233935.710081693
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M079",
                  "viralLoad": 6783417.18482028
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M088",
                  "viralLoad": 18180717.486665975
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M092",
                  "viralLoad": 7969638.420319227
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M094",
                  "viralLoad": 25211207.951285604
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M095",
                  "viralLoad": 36196542.41650508
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M097",
                  "viralLoad": 60009933.36948957
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C6M098",
                  "viralLoad": 17291522.37565357
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C7M005",
                  "viralLoad": 13454058.25104752
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C7M016",
                  "viralLoad": 7413652.238314518
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C7M017",
                  "viralLoad": 2843386.98411911
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C7M027",
                  "viralLoad": 1757258.03126069
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C7M031",
                  "viralLoad": 1860822.6949569236
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "C7M032",
                  "viralLoad": 2955343.0999422343
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "S1M045",
                  "viralLoad": 3069091.308653975
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "S1M046",
                  "viralLoad": 1958936.6608151458
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "SC0322",
                  "viralLoad": 23520282.67216224
                },
                {
                  "date": "2023-08-24T00:00:00Z",
                  "manholeID": "SMISC-079",
                  "viralLoad": 12565239.561038496
                }
              ]
            }
        }
    ))
};