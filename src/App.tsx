import React from 'react';

import { TimeTable } from './timetable'

type DowMaxiesProps = {
  onDowMaxChange: (dowMax: number) => void;
}

const DowMaxies: React.FC<DowMaxiesProps> = (props) => {
  const onDowMaxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = Number(e.target.value);
    props.onDowMaxChange(num);
  }

  return (
    <>
      <p>何曜日まで入れるかを選んでください。</p>
      <select onChange={e => onDowMaxChange(e)}>
        <option value="1">月曜まで</option>
        <option value="2">火曜まで</option>
        <option value="3">水曜まで</option>
        <option value="4">木曜まで</option>
        <option value="5">金曜まで</option>
        <option value="6">土曜まで</option>
        <option value="7">日曜まで</option>
      </select>
    </>
  );
}

type PeriodMaxiesProps = {
  onPeriodMaxChange: (periodMax: number) => void;
}

const PeriodMaxies: React.FC<PeriodMaxiesProps> = (props) => {
  const onPeriodMaxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = Number(e.target.value);
    props.onPeriodMaxChange(num);
  }

  return (
    <>
      <p>時限数を選んでください。</p>
      <select onChange={e => onPeriodMaxChange(e)}>
        <option value="1">1限まで</option>
        <option value="2">2限まで</option>
        <option value="3">3限まで</option>
        <option value="4">4限まで</option>
        <option value="5">5限まで</option>
        <option value="6">6限まで</option>
        <option value="7">7限まで</option>
        <option value="8">8限まで</option>
        <option value="9">9限まで</option>
        <option value="10">10限まで</option>
      </select>
    </>
  );
}

type PeriodRangeProps = {
  period: number;
  onPeriodChange: (period: number, startHour: number | null, startMin: number | null, endHour: number | null, endMin: number | null) => void;
}

const PeriodRange: React.FC<PeriodRangeProps> = (props) => {
  const onPeriodHourRangeStChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const hour = Number(e.target.value);
    props.onPeriodChange(props.period, hour, null, null, null);
  }
  const onPeriodMinuteRangeStChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const minute = Number(e.target.value);
    props.onPeriodChange(props.period, null, minute, null, null);
  }
  const onPeriodHourRangeEnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const hour = Number(e.target.value);
    props.onPeriodChange(props.period, null, null, hour, null);
  }
  const onPeriodMinuteRangeEnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const minute = Number(e.target.value);
    props.onPeriodChange(props.period, null, null, null, minute);
  }

  return (
    <>
      <select name="hourRangeSt" onChange={e => onPeriodHourRangeStChange(e)}>
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
      </select>
      :
      <select name="minuteRangeSt" onChange={e => onPeriodMinuteRangeStChange(e)}>
        <option value="00">00</option>
        <option value="05">05</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
      </select>
      ~
      <select name="hourRangeEn" onChange={e => onPeriodHourRangeEnChange(e)}>
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
      </select>
      :
      <select name="minuteRangeEn" onChange={e => onPeriodMinuteRangeEnChange(e)}>
        <option value="00">00</option>
        <option value="05">05</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
        <option value="55">55</option>
      </select>
    </>
  );
}

type PeriodRangesProps = {
  maxPeriod: number;
  onPeriodChange: (period: number, startHour: number | null, startMin: number | null, endHour: number | null, endMin: number | null) => void;
}

const PeriodRanges: React.FC<PeriodRangesProps> = (props) => {
  return (
    <>
      <p>開講時間の範囲を入力してください。</p>
      {
        [...Array(props.maxPeriod).keys()].map((i) => {
          return (
            <div key={i.toString()}>
              <PeriodRange
                period={i}
                onPeriodChange={props.onPeriodChange}
              />
            </div>
          )
        })
      }
    </>
  );
}

type FieldItemsProps = {
  onFieldItemCheckBoxChange: (idx: number, checked: boolean) => void;
  onFieldItemTextChange: (idx: number, txt: string) => void;
}

const FieldItems: React.FC<FieldItemsProps> = (props) => {
  const onFieldItemCheckBoxChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    props.onFieldItemCheckBoxChange(idx, checked);
  }
  const onFieldItemTextChange = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    props.onFieldItemTextChange(idx, e.target.textContent || "");
  }

  return (
    <>
      <div>
        <h3>項目1</h3>
        <input type="checkbox" onChange={e => onFieldItemCheckBoxChange(0, e)}/>リンク有
        <br />
        <input type="text" placeholder="表示名" onChange={e => onFieldItemTextChange(0, e)}/>
      </div>
      <div>
        <h3>項目2</h3>
        <input type="checkbox" onChange={e => onFieldItemCheckBoxChange(1, e)}/>リンク有
        <br />
        <input type="text" placeholder="表示名" onChange={e => onFieldItemTextChange(1, e)}/>
      </div>
      <div>
        <h3>項目3</h3>
        <input type="checkbox" onChange={e => onFieldItemCheckBoxChange(2, e)}/>リンク有
        <br />
        <input type="text" placeholder="表示名" onChange={e => onFieldItemTextChange(2, e)}/>
      </div>
    </>
  );
}

type EditTableProps = {
  tableContent: { dowHeader: string[], periodHeader: {period: number, start: Date, end: Date}[], body: TimeTable.Field[][] };
  onEditFieldTitleChange: (dowIdx: number, periodIdx: number, txt: string) => void;
  onEditFieldItemChange: (dowIdx: number, periodIdx: number, itemIdx: number, txt: string) => void;
}

const EditTable: React.FC<EditTableProps> = (props) => {
  const dowN = props.tableContent.dowHeader.length;
  const periodN = props.tableContent.periodHeader.length;
  const onEditFieldTitleChange = (dowIdx: number, periodIdx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditFieldTitleChange(dowIdx, periodIdx, e.target.textContent || "");
  }
  const onEditFieldItemChange = (dowIdx: number, periodIdx: number, itemIdx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditFieldItemChange(dowIdx, periodIdx, itemIdx, e.target.textContent || "");
  }

  return (
    <>
      <p>各授業の名前や項目の値を入力してください．</p>
      <table>
        <thead>
          <tr>
            {
              props.tableContent.dowHeader.map((e, idx) => {
                return <th key={idx.toString()}>{e}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            /* 各i時限に対する処理。 */
            [...Array(periodN).keys()].map((periodIdx) => {
              return (
                <tr key={periodIdx.toString()}>
                  <td>{props.tableContent.periodHeader[periodIdx].period}</td>
                  {
                    /* i時限の行を曜日列方向になめる。 */
                    [...Array(dowN).keys()].map((dowIdx) => {
                      /* セル中の各項目。 */
                      return (
                        <>
                          <input type="text" name="fieldTitle" placeholder="タイトル" onChange={e => onEditFieldTitleChange(dowIdx, periodIdx, e)}/>
                          <div>
                            {
                              props.tableContent.body[dowIdx][periodIdx].items.map((item, itemIdx) => {
                                const placeholder = item.isLink ? "リンク" : "表示する文字";
                                return <p><input type="text" name="fieldText" placeholder={placeholder} onChange={e => onEditFieldItemChange(dowIdx, periodIdx, itemIdx, e)}/></p>
                              })
                            }
                          </div>
                        </>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

type TimeTableRendererState = {
  table: TimeTable.Table;
}

class TimeTableRenderer extends React.Component<{}, TimeTableRendererState> {
  constructor(props: {}) {
    super(props);
    this.state = { table: new TimeTable.Table(5, 5) };
  }


  updatePeriodRanges(period: number, startHour: number | null, startMin: number | null, endHour: number | null, endMin: number | null) {
    this.state.table.setPeriodRange(period, startMin, startHour, endHour, endMin);
  }

  updateFieldItemIsLink(idx: number, isLink: boolean) {
    const item_tmpls = this.state.table.getItemStructure();
    item_tmpls[idx].isLink = isLink;
    this.state.table.setItemStructure(item_tmpls);
  }

  updateFieldItemText(idx: number, name: string) {
    const item_tmpls = this.state.table.getItemStructure();
    item_tmpls[idx].name = name;
    this.state.table.setItemStructure(item_tmpls);
  }

  updateFieldTitle(dowIdx: number, periodIdx: number, title: string) {
    const field = this.state.table.getField(periodIdx, dowIdx);
    field.name = title;
    this.state.table.setField(field, dowIdx, periodIdx);
  }

  updateFieldItem(dowIdx: number, periodIdx: number, itemIdx: number, value: string) {
    const field = this.state.table.getField(periodIdx, dowIdx);
    field.items[itemIdx].value = value;
    this.state.table.setField(field, dowIdx, periodIdx);
  }

  render() {
    const tableContent = this.state.table.toObject();
    const dowMaxies = <DowMaxies onDowMaxChange={num => this.state.table.setDowSize(num)}/>;
    const periodMaxies = <PeriodMaxies onPeriodMaxChange={num => this.state.table.setPeriodSize(num)}/>;
    const periodRanges = <PeriodRanges maxPeriod={tableContent.periodHeader.length} onPeriodChange={this.updatePeriodRanges}/>;
    const fieldItems = <FieldItems onFieldItemCheckBoxChange={this.updateFieldItemIsLink} onFieldItemTextChange={this.updateFieldItemText}/>;
    const editTable = <EditTable tableContent={tableContent} onEditFieldTitleChange={this.updateFieldTitle} onEditFieldItemChange={this.updateFieldItem}/>;

    return (
      <>
        <div>
          <h2>曜日</h2>
          {dowMaxies}
        </div>
        <div>
          <h2>時限</h2>
          {periodMaxies}
        </div>
        <div>
          <h2>時限の範囲</h2>
          {periodRanges}
        </div>
        <div>
          <h2>コマの項目</h2>
          {fieldItems}
        </div>
        <div>
          <h2>時間割の入力</h2>
          {editTable}
        </div>
      </>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="main">
      <TimeTableRenderer />
    </div>
  );
}

export default App;
