(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{614:function(t,i,n){"use strict";n.r(i);var e=n(17),h=Object(e.a)({},(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("题目描述")])]),t._v(" "),n("p",[t._v("给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。")]),t._v(" "),n("blockquote",[n("p",[t._v("例1")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]\n输出：6\n")])])]),n("blockquote",[n("p",[t._v("例2")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：height = [4,2,0,3,2,5]\n输出：9\n")])])]),n("blockquote",[n("p",[t._v("思路")])]),t._v(" "),n("ul",[n("li",[t._v("首先找出所有的制高点，所谓制高点就是广义极大值点")]),t._v(" "),n("li",[t._v("（关键）以每个制高点为左边界，找到其右边界。具体做法是沿着制高点数组向右找第一个大于等于的制高点作为右边界，如果找到头也没找到，则把其中最大的作为右边界")]),t._v(" "),n("li",[t._v("从最左制高点开始将其作为左边界，将上一步找到的其右边界作为右边界，找到它们当中的较低点作为水平面值，从此点开始向左或者向右将深度加到结果中去，直到遇到某处的高度大于水平面值为止。之后将右边界作为左边界循环此步，直到边界抵达最右制高点。")])]),t._v(" "),n("blockquote",[n("p",[t._v("附上代码")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("public int trap(int[] height) {\n    int ans = 0;\n    int len = height.length;\n    if(len == 1){\n        return ans;\n    }\n    //制高点list\n    List<Integer> list = new ArrayList<>();\n    //将所有制高点的数组下标按顺序放入list中\n    if(height[0] >= height[1]){\n        list.add(0);\n    }\n    for (int i = 1; i < len - 1; i++) {\n        if(height[i] >= height[i - 1] && height[i] >= height[i + 1]){\n            list.add(i);\n        }\n    }\n    if(height[len - 1] >= height[len - 2]){\n        list.add(len - 1);\n    }\n    int size = list.size();\n    //所有制高点的右边界的list下标\n    int[] rightFirstHigher = new int[size];\n    rightFirstHigher[size - 1] = size;\n    //关键步骤，从右向左找到所有制高点的右边界的list下标\n    for (int i = size - 2; i >= 0; i--) {\n        //next期望找到第一个大于等于当前制高点的下标，nextI为未找到next前小于当前制高点的最高点的下标\n        int h = height[list.get(i)],next = i + 1,nextI = i + 1;\n        while (next < size && height[list.get(next)] < h){\n            if(height[list.get(next)] > height[list.get(nextI)]){\n                nextI = next;\n            }\n            next = rightFirstHigher[next];\n        }\n        //没找到，右边界为nextI，否则为next\n        rightFirstHigher[i] = next == size ? nextI : next;\n    }\n    //统计各区间的水量\n    for (int i = 0; i < size - 1; i=rightFirstHigher[i]) {\n        int left = list.get(i),right = list.get(rightFirstHigher[i]);\n        int min = Math.min(height[left],height[right]);\n        if(height[left] < height[right]){\n            for (int j = left + 1; j < right; j++) {\n                //保证不大于水平面高度\n                if(height[j] > min){\n                    break;\n                }\n                ans += min - height[j];\n            }\n        }else {\n            for (int j = right - 1; j > left; j--) {\n                if(height[j] > min){\n                    break;\n                }\n                ans += min - height[j];\n            }\n        }\n    }\n    return ans;\n}\n")])])]),n("p",[t._v("时空间复杂度感人😂")])])}),[],!1,null,null,null);i.default=h.exports}}]);