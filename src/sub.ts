import { Graph } from '@dagrejs/graphlib';
import claspJson from '../.clasp.json'

export function echo_hoge() {
  console.log("hoge-----!!!");
  console.log("ScriptID: " + claspJson.scriptId);
}

export function test_graphlib() {
  // 有向非巡回グラフを作成
  const g = new Graph({ directed: true });

  // ノードを追加
  g.setNode('A');
  g.setNode('B');
  g.setNode('C');
  g.setNode('D');

  // エッジを追加（有向エッジ）
  g.setEdge('A', 'B');
  g.setEdge('A', 'C');
  g.setEdge('B', 'D');
  g.setEdge('C', 'D');

  // グラフのノードとエッジを表示
  console.log('Nodes in the graph:', g.nodes());
  console.log('Edges in the graph:', g.edges());

  // 特定のノードの先行ノードや後続ノードを確認
  console.log('Predecessors of D:', g.predecessors('D'));
  console.log('Successors of A:', g.successors('A'));
}
