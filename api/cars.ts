import { NowRequest, NowResponse } from '@now/node';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { Car } from 'types/Car';

export default async (req: NowRequest, res: NowResponse) => {
  const response = await fetch(
    'https://www.vaihtoplus.fi/vaihtoautot/index.php',
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body:
        '_rpc=a%3A8%3A%7Bs%3A1%3A%220%22%3Bs%3A680%3A%22b_resultcount%3D%26cpp%3D48%26ha%255Bcombined_result_form%255D%3D1%26ha%255Blive_fields%255D%3Dmake%252Cmodel%26ha%255Bmake%255D%3D%26ha%255Bbodytype%255D%3D%26ha%255Btransmission%255D%3D%26ha%255Bfueltype%255D%3D%26ha%255Bhybridtype%255D%3D%26ha%255Bpricemin%255D%3D25000%26ha%255Bpricemax%255D%3D35000%26orderby%3Dprice%2Bdesc%252Cmake%252Cmodel%252Ctype%26ha%255Bkkera%255D%3D%26ha%255Bkkera_kasiraha%255D%3D%26ha%255Bkkera_tyyppi%255D%3D48kk%26ha%255Bfirstregistrationmin%255D%3D2017%26ha%255Bfirstregistrationmax%255D%3D%26ha%255Bmileagemin%255D%3D%26ha%255Bmileagemax%255D%3D100000%26ha%255Bemissionco2min%255D%3D%26ha%255Bemissionco2max%255D%3D%26ha%255Bpowerhvmin%255D%3D%26ha%255Bpowerhvmax%255D%3D%26ha%255Bcylindervolmin%255D%3D%26ha%255Bcylindervolmax%255D%3D%26ha%255Bdrivetype%255D%3D%26ha%255Bseattotal%255D%3D%26ha%255Bid_dealer%255D%3D67%26ha%255Bsearchtext%255D%3D%26vahti_email%3D%26charset%3Dutf8%22%3Bs%3A1%3A%221%22%3Bs%3A1%3A%226%22%3Bs%3A1%3A%222%22%3Bs%3A0%3A%22%22%3Bs%3A1%3A%223%22%3Bs%3A4%3A%22path%22%3Bs%3A1%3A%224%22%3Bs%3A4%3A%22true%22%3Bs%3A2%3A%22id%22%3Bs%3A4%3A%224706%22%3Bs%3A8%3A%22funcname%22%3Bs%3A30%3A%22dms_va_get_search_results_html%22%3Bs%3A10%3A%22js_handler%22%3Bs%3A27%3A%22updateSearchResultsCallback%22%3B%7D',
      method: 'POST',
    }
  ).then(response => response.text());

  const data = eval(`${response}; result;`);

  const $ = cheerio.load(data.result.html);

  const cars: Car[] = Array.from($('ul.tc-carlist li')).map(li => {
    return {
      id: $(li).attr('id')!,
      name: $(li)
        .find('strong')
        .text(),
      link:
        'https://www.vaihtoplus.fi' +
          $(li)
            .find('a')
            .attr('href') ?? '',
      image:
        'https://www.vaihtoplus.fi' +
          $(li)
            .find('img')
            .attr('src') ?? '',
    };
  });

  res.setHeader('Cache-Control', 's-maxage=3600');

  res.json({
    cars,
  });
};
